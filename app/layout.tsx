import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, Pinyon_Script, Monoton } from "next/font/google"; // Importation de Monoton
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

// Configuration de Monoton
const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
});
export const metadata: Metadata = {
  title: "Prohabitation plaquiste Perpignan",
  description: "Pose placo, joints, isolation et peinture à Perpignan et dans l'ensemble des Pyrénées Orientales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${pinyon.variable} ${monoton.variable} font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
        
    </html>
  );
}
