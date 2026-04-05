"use client";

import Image from "next/image";
import Link from "next/link"; // Ajout de l'import

export default function Hero2() {
  return (
    <section className="w-full bg-slate-200 overflow-hidden pt-12 md:pt-16 pb-0">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end">
        
        {/* --- Colonne Image (Gauche sur desktop) --- */}
        <div className="relative flex justify-center md:justify-end h-[350px] md:h-[420px] w-full order-1 md:order-1">
          <div 
            className="relative w-full h-full max-w-[480px] overflow-hidden shadow-2xl"
            style={{
              clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/images/peinture/peinture2.jpg" 
              alt="Artisan Peintre Perpignan" 
              fill 
              priority
              className="object-cover object-center scale-110" 
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
        </div>

        {/* --- Colonne Texte (Droite sur desktop) --- */}
        <div className="flex flex-col order-2 md:order-2 md:pl-6 pb-12 md:pb-16">
          <div className="max-w-xl">
            <div className="flex flex-col leading-tight mb-6">
              <h2 className="text-2xl md:text-3xl font-medium text-slate-800">
                Prohabitation peinture
              </h2>
              <p className="text-2xl md:text-4xl font-medium text-slate-800">
                Spécialiste peinture <span className="font-pinyon text-4xl md:text-5xl italic">neuf et rénovation</span>
              </p>
            </div>

            <div className="space-y-4 text-slate-700 text-base md:text-lg leading-relaxed mb-8">
              <p className="font-semibold text-slate-800">
                Artisan peintre
              </p>
              <p>
                Les travaux de peinture intérieure sont les travaux de finition par excellence dans la rénovation. Tout le résultat final dépendra de la qualité de l'application de la peinture.
              </p>
            </div>

            {/* --- Bouton avec lien vers Devis --- */}
            <Link href="/devis">
              <button className="group relative bg-slate-800 text-white px-8 py-3 text-lg font-medium transition-all duration-300 ease-in-out hover:bg-teal-700 hover:shadow-xl active:scale-95 w-fit">
                Demande devis
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}