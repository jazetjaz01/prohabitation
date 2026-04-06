import type { Metadata } from "next"; // Essentiel pour le SEO
import Hero1 from "@/components/isolation/Hero1";
import Hero2 from "@/components/isolation/Hero2";
import Hero3 from "@/components/isolation/Hero3";
import Hero4 from "@/components/placo/Hero4";
import Hero5 from "@/components/accueil/Hero5";
import Hero6 from "@/components/accueil/Hero6";

export const metadata: Metadata = {
  title: "Isolation Thermique & Acoustique (ITI)",
  description: "Améliorez le confort de votre habitat à Perpignan. Isolation des murs, combles et cloisons. Économisez sur vos factures d'énergie dans les Pyrénées-Orientales.",
  keywords: [
    "isolation Perpignan", 
    "isolation intérieure 66", 
    "laine de verre", 
    "laine de roche", 
    "économie énergie Perpignan", 
    "isolation thermique murs"
  ],
};

export default function Isolation() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="flex flex-col">
       <Hero1 />
       <Hero2 />
       <Hero3 />
       {/* Attention : Si Hero4 parle de placo, assure-toi qu'il 
           évoque aussi l'isolation des cloisons */}
       <Hero4 /> 
       <Hero5 />
       <Hero6 />
      </main>
    </div>
  );
}