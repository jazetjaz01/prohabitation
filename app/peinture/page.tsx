import type { Metadata } from "next"; // Obligatoire pour le SEO
import Hero1 from "@/components/peinture/Hero1";
import Hero2 from "@/components/peinture/Hero2";
import Hero3 from "@/components/peinture/Hero3";
import Hero4 from "@/components/placo/Hero4";
import Hero5 from "@/components/accueil/Hero5";
import Hero6 from "@/components/accueil/Hero6";

// Métadonnées spécifiques à la peinture
export const metadata: Metadata = {
  title: "Peintre en bâtiment & Décoration",
  description: "Travaux de peinture intérieure et extérieure à Perpignan. Peinture décorative, rénovation de murs et plafonds dans les Pyrénées-Orientales. Devis gratuit.",
  keywords: [
    "peintre Perpignan", 
    "peinture intérieure 66", 
    "rénovation peinture Pyrénées-Orientales", 
    "artisan peintre Perpignan",
    "peinture façade 66"
  ],
};

export default function Peinture() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="flex flex-col">
       <Hero1 />
       <Hero2 />
       <Hero3 />
       {/* Note : Hero4 vient du dossier placo, assure-toi que le contenu textuel 
           à l'intérieur s'adapte bien à la peinture ou reste générique */}
       <Hero4 /> 
       <Hero5 />
       <Hero6 />
      </main>
    </div>
  );
}