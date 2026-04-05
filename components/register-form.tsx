'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const supabase = createClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Redirige l'utilisateur ici après avoir cliqué sur le lien dans l'email
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setMessage({ type: 'error', text: error.message })
    } else {
      setMessage({ 
        type: 'success', 
        text: 'Inscription réussie ! Vérifiez votre boîte mail pour confirmer votre compte.' 
      })
    }
    setIsSubmitting(false)
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Créer un compte</CardTitle>
        <CardDescription>Entrez votre email ci-dessous pour commencer.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nom@exemple.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          {message && (
            <p className={cn("text-sm", message.type === 'error' ? "text-red-500" : "text-green-600")}>
              {message.text}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Création..." : "S'inscrire"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Déjà un compte ?{" "}
          <Link href="/login" className="underline">
            Se connecter
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}