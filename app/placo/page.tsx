import type { Metadata } from "next"; // Import à ajouter
import Hero from "@/components/placo/Hero1";
import Hero2 from "@/components/placo/Hero2";
import Hero3 from "@/components/placo/Hero3";
import Hero4 from "@/components/placo/Hero4";
import Hero5 from "@/components/accueil/Hero5";
import Hero6 from "@/components/accueil/Hero6";

// Ces métadonnées vont s'insérer dans le template du layout
export const metadata: Metadata = {
  title: "Pose de Placo & Joints Perpignan et Pyrénées Orientales", 
  description: "Spécialiste de la pose de plaques de plâtre (placo), joints, cloisons sèches et faux plafonds à Perpignan. Finitions impeccables et isolation certifiée.",
  keywords: ["plaquiste Perpignan", "pose placo 66", "cloison sèche", "faux plafond Perpignan", "joints placo"],
};

export default function Placo() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <main className="flex flex-col">
       <Hero />
       <Hero2 />
       <Hero3 />
       <Hero4 />
       <Hero5 />
       <Hero6 />
      </main>
    </div>
  );
}