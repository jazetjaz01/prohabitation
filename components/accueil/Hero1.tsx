"use client";

import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background border-b min-h-[600px]">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[700px] relative">
        
        {/* --- Colonne TEXTE (Gauche) --- */}
        <div className="relative p-8 lg:p-20 flex flex-col justify-center items-start z-10 bg-slate-200
                        lg:bg-transparent
                        lg:after:content-[''] lg:after:absolute 
                        lg:after:top-0 lg:after:bottom-0 lg:after:right-[-100px] 
                        lg:after:left-0 
                        lg:after:bg-slate-200 lg:after:-z-10
                        lg:after:[clip-path:polygon(0%_0%,100%_0%,calc(100%-100px)_100%,0%_100%)]">
          
          <div className="max-w-xl">
            <Badge className="rounded-full border-border py-1 px-4 mb-6" variant="secondary">
              <Link href="/actualite" className="flex items-center text-sm font-medium">
                Actualité Prohabitation <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
              Pose placo, peinture <br /> 
              <span className="text-slate-600">et isolation</span>
            </h1>

            <p className="mt-6 text-slate-700 text-lg md:text-xl leading-relaxed opacity-90">
              Prohabitation intervient à <strong>Perpignan</strong> et dans l'ensemble des Pyrénées Orientales pour tous vos projets de rénovation ou de construction.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button className="rounded-full text-base px-8 h-12 bg-slate-900 hover:bg-slate-800" size="lg">
                Contact <ArrowUpRight className="ml-2 size-5" />
              </Button>
              <Button className="rounded-full text-base px-8 h-12 shadow-none border-slate-300" size="lg" variant="outline">
                <CirclePlay className="mr-2 size-5 text-slate-600" /> Youtube
              </Button>
            </div>
          </div>
        </div>

        {/* --- Colonne IMAGE (Droite) --- */}
        <div className="relative h-[300px] lg:h-full w-full z-0">
          <Image
            src="/images/accueil/accueil1.jpg" 
            alt="Travaux de placo et peinture Prohabitation" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>

      </div>
    </section>
  );
}