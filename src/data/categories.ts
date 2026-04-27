export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "celular",
    name: "Celular",
    description: "Wallpapers otimizados para phones Android e iPhone, com proporção 9:16.",
  },
  {
    slug: "4k",
    name: "4K Ultra HD",
    description: "Wallpapers em resolução 3840x2160 para máxima qualidade.",
  },
  {
    slug: "jogos",
    name: "Jogos",
    description: "Wallpapers de GTA, Free Fire, Fortnite, Minecraft e mais jogos.",
  },
  {
    slug: "frases",
    name: "Frases",
    description: "Wallpapers com frases motivacionais, filosóficas e inspiradoras.",
  },
  {
    slug: "ia",
    name: "Inteligência Artificial",
    description: "Wallpapers gerados por IA com arte futurista e abstract.",
  },
  {
    slug: "minimalista",
    name: "Minimalista",
    description: "Designs simples, limpos e elegantes para desktop e mobile.",
  },
  {
    slug: "natureza",
    name: "Natureza",
    description: "Paisagens, florestas, montanhas e fundos naturais.",
  },
  {
    slug: "tecnologia",
    name: "Tecnologia",
    description: "Wallpapers modernos com elementos digitais e futuristas.",
  },
  {
    slug: "abstrato",
    name: "Abstrato",
    description: "Cores vibrantes, formas e padrões artísticos.",
  },
  {
    slug: "anime",
    name: "Anime",
    description: "Wallpapers de animes populares, personagens e cenas.",
  },
  {
    slug: "cidade",
    name: "Cidade",
    description: "Paisagens urbanas, arquitetura e skylines noturnos.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryCount(slug: string, wallpapers: any[]) {
  return wallpapers.filter((wallpaper) => wallpaper.category === slug).length;
}