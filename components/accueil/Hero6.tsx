"use client";

import {
  VolumeX,
  ThermometerSnowflake,
  Layers,
  Split,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: VolumeX,
    title: "Isolation acoustique",
    description:
      "Réduisez les nuisances sonores et améliorez votre confort intérieur avec nos solutions d’isolation phonique.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Isolation thermique",
    description:
      "Optimisez l’efficacité énergétique de votre habitation pour des économies de chauffage. Nous avons le label RGE.",
  },
  {
    icon: Layers,
    title: "Faux-plafond",
    description:
      "Embellissez et modernisez vos espaces tout en améliorant l’acoustique avec de faux-plafonds élégants et fonctionnels.",
  },
  {
    icon: Split,
    title: "Cloisonnement",
    description:
      "Créez des espaces personnalisés grâce à la pose de cloisons sur ossature métallique ou en carreaux de plâtre traditionnels.",
  },
  {
    icon: ChevronUp,
    title: "Isolation des combles",
    description:
      "Exploitez vos combles pour gagner en confort thermique et réduire vos pertes de chaleur.",
  },
  {
    icon: ChevronDown,
    title: "Isolation du plancher bas",
    description:
      "Améliorez l’isolation de vos sols pour un confort thermique supérieur et des économies d’énergie.",
  },
];

const Hero6 = () => {
  return (
    <div className="flex pt-18 items-center justify-center py-12 bg-slate-200">
      <div>
        <h2 className="text-center font-semibold text-3xl tracking-tight sm:text-4xl text-slate-900">
          Nos solutions d'aménagement et d'isolation
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-xl sm:text-2xl">
          Expertise technique pour votre confort thermique et acoustique
        </p>
        <div className="mx-auto mt-10 grid max-w-(--breakpoint-lg) gap-6 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              className="flex flex-col rounded-xl border px-5 py-6 bg-slate-200 shadow-sm"
              key={service.title}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
                <service.icon className="size-5 text-slate-700" />
              </div>
              <span className="font-medium text-lg text-slate-900">{service.title}</span>
              <p className="mt-1 text-[15px] text-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero6;