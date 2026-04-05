'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogOut } from 'lucide-react'
import { useState } from 'react'

export default function LogoutPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    const supabase = createClient()
    
    try {
      // Déconnexion de Supabase (supprime la session côté client)
      await supabase.auth.signOut()
      
      // Force un rafraîchissement pour vider les cookies du Middleware
      router.refresh() 
      
      // Redirection vers la page de connexion
      router.push('/auth/login')
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-sm shadow-lg border-slate-200">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <LogOut size={24} />
          </div>
          <CardTitle className="text-xl">Déconnexion</CardTitle>
          <CardDescription>
            Êtes-vous sûr de vouloir quitter votre session Prohabitation ?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button 
            variant="destructive" 
            className="w-full uppercase tracking-widest text-xs font-bold" 
            onClick={handleLogout}
            disabled={isLoading}
          >
            {isLoading ? "Déconnexion..." : "Oui, me déconnecter"}
          </Button>
          <Button 
            variant="outline" 
            className="w-full uppercase tracking-widest text-xs font-bold" 
            onClick={() => router.back()}
            disabled={isLoading}
          >
            Annuler
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}