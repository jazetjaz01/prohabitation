"use client";

import Image from "next/image";
import Link from "next/link"; // Importation du composant Link

export default function Hero4() {
  return (
    <section className="w-full bg-slate-200 overflow-hidden pt-0 pb-16 md:pb-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-start">
        
        {/* --- Colonne Image --- */}
        <div className="relative flex justify-center md:justify-end h-[350px] md:h-[420px] w-full order-1">
          <div 
            className="relative w-full h-full max-w-[480px] overflow-hidden shadow-2xl"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",
            }}
          >
            <Image
              src="/images/placo/placo4.jpg" 
              alt="isolation interieure Perpignan" 
              fill 
              className="object-cover object-top scale-110" 
              priority
            />
          </div>
        </div>

        {/* --- Colonne Texte --- */}
        <div className="flex flex-col order-2 md:pl-8 mt-8 md:mt-20">
          <div className="max-w-xl">
            <div className="flex flex-col leading-tight mb-8">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-800">
                Prohabitation 
              </h2>
              <p className="text-3xl md:text-4xl font-medium text-slate-800">
                Projets <span className="font-pinyon text-5xl md:text-6xl">sur mesure</span>
              </p>
            </div>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed mb-10">
              <p className="font-semibold text-slate-900">
                Réalisez des projets uniques et parfaitement adaptés à vos besoins grâce à nos solutions personnalisées. 
              </p>
              <p>
               Nous collaborons étroitement avec vous et les autres corps de métier sur place pour créer des espaces qui répondent à vos attentes et à vos exigences.
              </p>
            </div>

            {/* Bouton transformé en Link pour le SEO et l'accessibilité */}
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