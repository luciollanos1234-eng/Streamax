export type Plan = {
  id: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Cuenta gratuita",
    price: "$0",
    description: "Disfrutá de contenido limitado con anuncios.",
    benefits: [
      "Acceso a contenido limitado",
      "Anuncios durante la reproducción",
    ],
  },
  {
    id: "estandar",
    name: "Cuenta estándar",
    price: "$9.99/mes",
    description: "Acceso completo a todo el catálogo sin anuncios.",
    benefits: [
      "Acceso completo a todo el catálogo",
      "Sin anuncios durante la reproducción",
    ],
  },
  {
    id: "premium",
    name: "Cuenta premium",
    price: "$14.99/mes",
    description:
      "Acceso completo a todo el catálogo, sin anuncios y con contenido exclusivo.",
    benefits: ["Acceso completo a todo el catálogo"],
  },
];
