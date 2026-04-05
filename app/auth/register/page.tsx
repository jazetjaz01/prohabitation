// fichier : app/auth/register/page.tsx

// 1. Importez votre composant de formulaire
import { RegisterForm } from "@/components/register-form" 

// 2. Utilisez l'exportation PAR DÉFAUT (export default)
export default function RegisterPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <RegisterForm />
    </div>
  )
}