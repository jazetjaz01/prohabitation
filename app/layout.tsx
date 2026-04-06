import type { Metadata } from "next";
// Suppression des imports Geist inutilisés
import { Outfit, Pinyon_Script, Monoton } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit", 
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
});

export const metadata: Metadata = {
  title: {
    default: "Prohabitation | Plaquiste & Peinture à Perpignan (66)",
    template: "%s | Prohabitation Perpignan"
  },
  description: "Expert en pose de placo, isolation thermique et peinture à Perpignan. Intervention rapide dans toutes les Pyrénées-Orientales. Devis gratuit !",
  keywords: ["plaquiste Perpignan", "peintre 66", "isolation Pyrénées-Orientales", "pose de placo", "rénovation Perpignan"],
  metadataBase: new URL("https://www.prohabitation.com"), // Aide Next.js à résoudre les URLs relatives (OG images, etc.)
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prohabitation - Plaquiste et Peintre à Perpignan",
    description: "Travaux de plâtrerie, isolation et peinture dans le 66.",
    url: "https://www.prohabitation.com",
    siteName: "Prohabitation",
    locale: "fr_FR",
    type: "website",
  },
  // Tu peux ajouter ceci pour les mobiles
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" // Parfait
      className={`${outfit.variable} ${pinyon.variable} ${monoton.variable} font-sans antialiased`}
    >
      <body className="min-h-screen flex flex-col"> 
        {/* Changé min-h-full en min-h-screen pour mieux gérer le footer collé en bas */}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}