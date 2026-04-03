import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import de Image
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    /* 1. On garde le min-h-screen mais on retire tout centrage vertical ici */
    <div className="relative flex min-h-screen w-full overflow-hidden bg-slate-200">
      
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-12 px-6 lg:grid-cols-2">
        
        {/* COLONNE TEXTE : On retire my-auto et on aligne en haut avec pt-12 (ou 0) */}
        <div className="flex flex-col justify-start pt-12 lg:pt-20"> 
          <Badge
            className="w-fit rounded-full border-border py-1"
            variant="secondary"
          >
            <Link href="/actualite" className="flex items-center">
              Actualité Prohabitation <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          
          <h1 className="mt-6 max-w-[17ch] font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            Pose placo pour cloisons et plafonds, peinture et isolation
          </h1>
          
          <p className="mt-6 max-w-[60ch] text-foreground/80 text-lg">
            Prohabitation intervient à Perpignan et dans l'ensemble des Pyrénées Orientales pour tous les projets de rénovation ou de construction.
          </p>
          
          <div className="mt-12 flex items-center gap-4">
            <Button className="rounded-full text-base" size="lg">
             Contact <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              className="rounded-full text-base shadow-none"
              size="lg"
              variant="outline"
            >
              <CirclePlay className="h-5! w-5!" /> Youtube Prohabitation
            </Button>
          </div>
        </div>

        {/* COLONNE IMAGE : Elle commence en haut de la grille (y=0) */}
        <div className="relative w-full overflow-hidden bg-accent lg:h-[650px] lg:w-[800px]">
          <Image
            src="/images/accueil/accueil1.jpg" 
            alt="Aperçu de l'interface"
            fill
            priority
            className="object-cover"
          />
        </div>
        
      </div>
    </div>
  );
}