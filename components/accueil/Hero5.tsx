import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Communication",
    description:
      "Nous attachons une attention toute particulière à la qualité de nos échanges, tant avec nos clients qu’avec les artisans et ouvriers présents sur le chantier.",
  },
  {
    icon: Blocks,
    title: "Délais",
    description:
      "Notre équipe s’engage à respecter les délais annoncés et à vous tenir informé immédiatement en cas de difficulté.",
  },
  {
    icon: Bot,
    title: "Normes",
    description:
      "Dans notre métier, les normes sont strictes et nombreuses. C’est pourquoi nous sélectionnons en permanence des produits innovants, parfaitement conformes à ces exigences.",
  },
  {
    icon: Film,
    title: "Sécurité",
    description:
      "Nous abordons chaque chantier comme s’il s’agissait de notre propre espace. La sécurité et la propreté sont au cœur de nos priorités.",
  },
  {
    icon: ChartPie,
    title: "Environnement",
    description:
      "Nous nous engageons en permanence à privilégier des solutions plus écologiques et durables, et à retourner les déchets de chantier à nos fournisseurs pour recyclage.",
  },
  {
    icon: MessageCircle,
    title: "Secteur d'intervention",
    description:
      "Nous opérons principalement dans les Pyrénées Orientales et pour des chantiers techniques nous intervenons dans l'Aude, l'Hérault et la Haute Garonne ( Toulouse )",
  },
];

const Hero5 = () => {
  return (
    <div className="flex pt-18 items-center justify-center py-12 ">
      <div>
        <h2 className="text-center font-semibold text-3xl tracking-tight sm:text-4xl">
         Prohabitation est  spécialisé dans les chantiers techniques
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-xl sm:text-2xl">
          Appartement, maison, local commercial, bureaux, local technique, local ERP
        </p>
        <div className="mx-auto mt-10 grid max-w-(--breakpoint-lg) gap-6 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex flex-col rounded-xl border px-5 py-6"
              key={feature.title}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <feature.icon className="size-5" />
              </div>
              <span className="font-medium text-lg">{feature.title}</span>
              <p className="mt-1 text-[15px] text-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero5;
