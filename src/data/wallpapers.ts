export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Wallpaper = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  download: string;
  tags: string[];
  resolution: string;
};

export const siteConfig = {
  title: "Wallpapers BR",
  description:
    "Galeria de wallpapers grátis organizados por categoria, com previews rápidos e downloads fáceis.",
};

export const categories: Category[] = [
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
    slug: "minimalista",
    name: "Minimalista",
    description: "Designs simples, limpos e elegantes para desktop e mobile.",
  },
  {
    slug: "abstrato",
    name: "Abstrato",
    description: "Cores vibrantes, formas e padrões artísticos.",
  },
  {
    slug: "cidade",
    name: "Cidade",
    description: "Paisagens urbanas, arquitetura e skylines noturnos.",
  },
];

export const wallpapers: Wallpaper[] = [
  {
    slug: "montanha-nevoa",
    title: "Montanha na Névoa",
    category: "natureza",
    description: "Uma vista inspiradora de montanhas cobertas pela névoa ao amanhecer.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    download:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
    tags: ["montanha", "nevoa", "natureza", "paisagem"],
    resolution: "3840x2160",
  },
  {
    slug: "cidade-noturna",
    title: "Cidade Noturna",
    category: "cidade",
    description: "Luzes e arranha-céus criando uma atmosfera urbana moderna.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    download:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1920&q=80",
    tags: ["cidade", "noite", "urbano", "arquitetura"],
    resolution: "3840x2160",
  },
  {
    slug: "rede-digital",
    title: "Rede Digital",
    category: "tecnologia",
    description: "Conexões futuristas e formas geométricas em um visual tech.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    download:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    tags: ["tecnologia", "futuro", "digital", "rede"],
    resolution: "3840x2160",
  },
  {
    slug: "geometria-minimalista",
    title: "Geometria Minimalista",
    category: "minimalista",
    description: "Formas suaves e cores sóbrias para um visual calmo.",
    image:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1200&q=80",
    download:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1920&q=80",
    tags: ["minimalista", "geometria", "paz", "design"],
    resolution: "3840x2160",
  },
  {
    slug: "pinceladas-coloridas",
    title: "Pinceladas Coloridas",
    category: "abstrato",
    description: "Texturas e cores que criam uma composição abstrata vibrante.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    download:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80",
    tags: ["abstrato", "cores", "arte", "textura"],
    resolution: "3840x2160",
  },
  {
    slug: "lua-sobre-a-cidade",
    title: "Lua Sobre a Cidade",
    category: "cidade",
    description: "Um céu estrelado com a lua acima de edifícios iluminados.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    download:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
    tags: ["lua", "cidade", "noite", "céu"],
    resolution: "3840x2160",
  },
  {
    slug: "folhagem-verde",
    title: "Folhagem Verde",
    category: "natureza",
    description: "Texturas de folhas verdes criam um wallpaper relaxante.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade48564?auto=format&fit=crop&w=1200&q=80",
    download:
      "https://images.unsplash.com/photo-1500534623283-312aade48564?auto=format&fit=crop&w=1920&q=80",
    tags: ["folhagem", "verde", "natureza", "folhas"],
    resolution: "3840x2160",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getWallpaper(slug: string) {
  return wallpapers.find((wallpaper) => wallpaper.slug === slug);
}

export function getWallpapersByCategory(slug: string) {
  return wallpapers.filter((wallpaper) => wallpaper.category === slug);
}

export function getLatestWallpapers() {
  return wallpapers.slice(0, 6);
}

export function getCategoryCount(slug: string) {
  return wallpapers.filter((wallpaper) => wallpaper.category === slug).length;
}
