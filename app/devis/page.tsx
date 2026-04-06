import type { Metadata } from "next";
import DevisForm from "@/components/DevisForm"; // Import du composant ci-dessous

export const metadata: Metadata = {
  title: "Devis Gratuit Plaquiste & Peinture Perpignan | Prohabitation",
  description: "Obtenez un devis gratuit en 48h pour vos travaux de placo, peinture intérieure et isolation dans les Pyrénées-Orientales (66). Estimation précise et rapide.",
};

export default function DevisPage() {
  // Données structurées spécifiques à une offre de service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Travaux de rénovation et plâtrerie",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Prohabitation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 avenue de Banyuls sur mer",
        "addressLocality": "Perpignan",
        "postalCode": "66100",
        "addressRegion": "Pyrénées-Orientales",
        "addressCountry": "FR"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Pyrénées-Orientales"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "description": "Devis gratuit et personnalisé sous 48h"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DevisForm />
    </>
  );
}