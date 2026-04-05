"use client";

import Image from "next/image";
import Link from "next/link"; // 1. Import de Link

export default function Hero3() {
  return (
    <section className="w-full bg-white overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* --- Colonne Texte --- */}
        <div className="flex flex-col order-2 md:order-1 items-start mt-8 md:mt-0 md:pl-12 lg:pl-20">
          <div className="max-w-xl w-full">
            
            <div className="flex flex-col leading-tight mb-8">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-800">
                Prohabitation isolation
              </h2>
              <p className="text-3xl md:text-4xl font-medium text-slate-800">
                <span className="font-pinyon text-5xl md:text-6xl">isolation</span> intérieure
              </p>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                 Nous proposons plusieurs techniques d’isolation intérieure adaptées à la configuration de votre logement et à votre budget. 
              </p>
              <p className="font-medium text-slate-800 border-l-4 border-teal-700 pl-4">
                Pour l’isolation des murs, différentes méthodes sont possibles : le doublage sur ossature, qui garantit d’excellentes performances thermiques, le doublage collé avec panneaux isolants 2-en-1, rapide et efficace, ou encore l’isolation par projection (ouate de cellulose) idéale pour les surfaces irrégulières. 

              </p>
            </div>

            {/* 2. Remplacement du button par un Link avec les mêmes classes de style */}
            <Link href="/devis">
              <button className="group relative bg-slate-800 text-white px-8 py-3 text-lg font-medium transition-all duration-300 ease-in-out hover:bg-teal-700 hover:shadow-xl active:scale-95 w-fit">
                Demande devis
              </button>
            </Link>
          </div>
        </div>

        {/* --- Colonne Image --- */}
        <div className="relative flex justify-center md:justify-start h-[380px] md:h-[450px] w-full order-1 md:order-2">
          <div 
            className="relative w-full h-full max-w-[420px] aspect-square overflow-hidden shadow-2xl md:ml-12 lg:ml-20"
          >
            <Image
              src="/images/isolation/isolation3.jpg" 
              alt="Peinture Perpignan" 
              fill 
              className="object-cover scale-110"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}