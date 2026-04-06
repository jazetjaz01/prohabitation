import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm"; // On importe le formulaire ci-dessous

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit | Plaquiste Peintre Isolation Perpignan",
  description: "Demandez votre devis gratuit pour vos travaux de placo, peinture et isolation à Perpignan et dans les Pyrénées-Orientales. Prohabitation vous répond sous 48h.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prohabitation",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7 avenue de Banyuls sur mer",
      "addressLocality": "Perpignan",
      "postalCode": "66100",
      "addressRegion": "Pyrénées-Orientales",
      "addressCountry": "FR"
    },
    "telephone": "+33616224682",
    "email": "contact@prohabitation.com",
    "url": "https://www.prohabitation.com",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.6886,
      "longitude": 2.8948
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactForm />
    </>
  );
}