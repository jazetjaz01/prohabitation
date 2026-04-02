"use client";

export const Logo = () => (
  <div className="flex flex-col items-center leading-none">
    {/* "merci" toujours en Monoton avec un grand espacement */}
    <span className="font-monoton text-xl md:text-2xl tracking-widest text-teal-600">
      prohabitation
    </span>
    
    {/* "immobilier" avec un espacement de lettres élargi (tracking-widest) */}
    <span className="hidden md:block text-sm md:text-sm font-medium -mt-1 tracking-[0.5em] ">
      plaquiste peinture isolation
    </span>
  </div>
);