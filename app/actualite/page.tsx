import type { Metadata } from "next";
import Hero1 from "@/components/actualite/Hero1";
import Blog from "@/components/blog";

export const metadata: Metadata = {
  title: "Actualités & Conseils Rénovation Perpignan | Prohabitation",
  description: "Découvrez nos derniers chantiers de placo, peinture et isolation dans les Pyrénées-Orientales. Conseils d'experts pour vos travaux de rénovation.",
  keywords: ["blog rénovation Perpignan", "conseils plaquiste", "actualités bâtiment 66", "astuces peinture intérieure"],
};

export default function ActualitesPage() {
  // Données structurées pour un Blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Le Blog de Prohabitation",
    "description": "Conseils et réalisations en plâtrerie et peinture à Perpignan",
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Prohabitation",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Perpignan",
        "postalCode": "66100",
        "addressCountry": "FR"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-200 font-sans">
        <main className="flex flex-col">
          {/* Assure-toi que Hero1 contient un <h1> avec le mot "Actualités" ou "Blog" */}
          <Hero1 />
          <Blog />
        </main>
      </div>
    </>
  );
}