export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type DownloadSize = {
  width: number;
  height: number;
  label: string;
  url: string;
};

export type Wallpaper = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  downloads: DownloadSize[];
  tags: string[];
  resolution: string;
  isFeatured?: boolean;
};

export const categories: Category[] = [
  { slug: "celular", name: "Celular", description: "Wallpapers otimizados para phones Android e iPhone, com proporção 9:16." },
  { slug: "4k", name: "4K Ultra HD", description: "Wallpapers em resolução 3840x2160 para máxima qualidade." },
  { slug: "jogos", name: "Jogos", description: "Wallpapers de GTA, Free Fire, Fortnite, Minecraft e mais jogos." },
  { slug: "frases", name: "Frases", description: "Wallpapers com frases motivacionais, filosóficas e inspiradoras." },
  { slug: "ia", name: "Inteligência Artificial", description: "Wallpapers gerados por IA com arte futurista e abstract." },
  { slug: "minimalista", name: "Minimalista", description: "Designs simples, limpos e elegantes para desktop e mobile." },
  { slug: "natureza", name: "Natureza", description: "Paisagens, florestas, montanhas e fundos naturais." },
  { slug: "tecnologia", name: "Tecnologia", description: "Wallpapers modernos com elementos digitais e futuristas." },
  { slug: "abstrato", name: "Abstrato", description: "Cores vibrantes, formas e padrões artísticos." },
  { slug: "anime", name: "Anime", description: "Wallpapers de animes populares, personagens e cenas." },
  { slug: "cidade", name: "Cidade", description: "Paisagens urbanas, arquitetura e skylines noturnos." },
  { slug: "animais", name: "Animais", description: "Wallpapers de animais selvagens, domésticos e exóticos." },
  { slug: "arquitetura", name: "Arquitetura", description: "Edifícios, construções e design architectural." },
  { slug: "carros", name: "Carros", description: "Wallpapers de carros esportivos e超级跑车." },
  { slug: "motos", name: "Motos", description: "Wallpapers de motocicletas esportivas e custom." },
  { slug: "esportes", name: "Esportes", description: "Wallpapers de berbagai modalidades esportivas." },
  { slug: "musica", name: "Música", description: "Wallpapers de cantores, bandas e instrumentos." },
  { slug: "filmes", name: "Filmes", description: "Wallpapers de filmes, atores e cenas cinematográficas." },
  { slug: "espaco", name: "Espaço", description: "Wallpapers do universo,galáxias e fenômenos espaciais." },
  { slug: "flores", name: "Flores", description: "Wallpapers de flores, plantas e jardinagem." },
  { slug: "comida", name: "Comida", description: "Wallpapers de comidas deliciosa e sobremesas." },
  { slug: "amor", name: "Amor", description: "Wallpapers românticos e relacionamentos." },
  { slug: "preto", name: "Preto", description: "Wallpapers em tons escuros e minimalistas." },
  { slug: "futurista", name: "Futurista", description: "Arte cyberpunk e futurista." },
];

export const siteConfig = {
  title: "Wallpapers BR",
  description: "Galeria de wallpapers grátis organizados por categoria, com previews rápidos e downloads fáceis.",
};

const wallpapersData: Wallpaper[] = [
  { slug: "celular-preto-minimalista", title: "Wallpaper 4K celular preto minimalista", category: "celular", description: "Wallpaper preto minimalista perfeito para celular Android e iPhone.", image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1080, height: 1920, label: "Full HD", url: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1080&q=80" }, { width: 1440, height: 2560, label: "2K", url: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1440&q=80" }], tags: ["celular", "preto", "minimalista", "android", "iphone"], resolution: "1080x1920", isFeatured: true },
  { slug: "celular-gradiente-roxo", title: "Gradiente Roxo Celulare HD", category: "celular", description: "Wallpaper com gradiente roxo moderno para celular.", image: "https://images.unsplash.com/photo-1557682250-33bd709c597a?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1080, height: 1920, label: "Full HD", url: "https://images.unsplash.com/photo-1557682250-33bd709c597a?auto=format&fit=crop&w=1080&q=80" }, { width: 1440, height: 2560, label: "2K", url: "https://images.unsplash.com/photo-1557682250-33bd709c597a?auto=format&fit=crop&w=1440&q=80" }], tags: ["celular", "gradiente", "roxo", "moderno"], resolution: "1080x1920" },
  { slug: "celular-azul-escuro", title: "Azul Escuro Celular Download", category: "celular", description: "Wallpaper azul escuro elegante para celular.", image: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1080, height: 1920, label: "Full HD", url: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1080&q=80" }, { width: 1440, height: 2560, label: "2K", url: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=1440&q=80" }], tags: ["celular", "azul", "escuro", "elegante"], resolution: "1080x1920" },
  { slug: "montanha-nevoa-4k", title: "Montanha na Névoa 4K Ultra HD", category: "4k", description: "Uma vista inspiradora de montanhas cobertas pela névoa ao amanhecer.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2560&q=80" }, { width: 3840, height: 2160, label: "4K", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=3840&q=80" }], tags: ["4k", "montanha", "natureza", "paisagem", "hd"], resolution: "3840x2160", isFeatured: true },
  { slug: "cidade-noturna-4k", title: "Cidade Noturna 4K HD Download", category: "4k", description: "Luzes e arranha-céus criando uma atmosfera urbana moderna.", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2560&q=80" }, { width: 3840, height: 2160, label: "4K", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=3840&q=80" }], tags: ["4k", "cidade", "noite", "urbano"], resolution: "3840x2160" },
  { slug: "oceano-4k", title: "Oceano 4K Ultra HD", category: "4k", description: "Paisagem oceânica em 4K para wallpaper.", image: "https://images.unsplash.com/photo-1505118380757-7f290cd2bc36?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1505118380757-7f290cd2bc36?auto=format&fit=crop&w=2560&q=80" }, { width: 3840, height: 2160, label: "4K", url: "https://images.unsplash.com/photo-1505118380757-7f290cd2bc36?auto=format&fit=crop&w=3840&q=80" }], tags: ["4k", "oceano", "mar", "natureza"], resolution: "3840x2160" },
  { slug: "gta-v-city", title: "GTA V Los Santos Wallpaper", category: "jogos", description: "Wallpaper города Los Santos do GTA V.", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2560&q=80" }, { width: 3840, height: 2160, label: "4K", url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=3840&q=80" }], tags: ["gta", "jogos", "cidade", "urbano"], resolution: "1920x1080", isFeatured: true },
  { slug: "free-fire-personagem", title: "Free Fire Personagem Wallpaper", category: "jogos", description: "Wallpaper do jogo Free Fire.", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=2560&q=80" }], tags: ["free fire", "jogos", "battle royale"], resolution: "1920x1080" },
  { slug: "fortnite-battle-royale", title: "Fortnite Battle Royale Wallpaper", category: "jogos", description: "Wallpaper do Fortnite.", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2560&q=80" }], tags: ["fortnite", "jogos", "gamer"], resolution: "1920x1080" },
  { slug: "minecraft-landscape", title: "Minecraft Landscape Wallpaper", category: "jogos", description: "Paisagem estilo Minecraft.", image: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?auto=format&fit=crop&w=2560&q=80" }], tags: ["minecraft", "jogos", "pixel"], resolution: "1920x1080" },
  { slug: "frase-motivacional-nunca-desista", title: "Wallpaper frase nunca desista", category: "frases", description: "Wallpaper com frase motivacional: 'Nunca desista dos seus sonhos'.", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1080, height: 1920, label: "Celular", url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1080&q=80" }, { width: 1920, height: 1080, label: "Desktop", url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1920&q=80" }], tags: ["frase", "motivacional", "inspiração", "sonhos"], resolution: "1080x1920", isFeatured: true },
  { slug: "frase-filosofo-sorte", title: "Sorte é quando a preparação encontra a oportunidade", category: "frases", description: "Wallpaper com frase filosófica sobre sorte.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1080, height: 1920, label: "Celular", url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1080&q=80" }, { width: 1920, height: 1080, label: "Desktop", url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80" }], tags: ["frase", "filosofia", "sorte"], resolution: "1080x1920" },
  { slug: "frase-pequenos-passos", title: "GRandes resultados começam com pequenos passos", category: "frases", description: "Wallpaper inspirador sobre pequenos passos.", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1080, height: 1920, label: "Celular", url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1080&q=80" }, { width: 1920, height: 1080, label: "Desktop", url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1920&q=80" }], tags: ["frase", "motivacional", "sucesso"], resolution: "1080x1920" },
  { slug: "ia-cyberpunk-futuro", title: "AI Cyberpunk Futurista Wallpaper", category: "ia", description: "Arte cibernética estilo IA com tons de neon e futuro.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2560&q=80" }], tags: ["ia", "cyberpunk", "futuro", "tecnologia"], resolution: "1920x1080", isFeatured: true },
  { slug: "ia-abstract-fluid", title: "AI Arte Abstrata Fluida", category: "ia", description: "Arte abstrata fluido gerada por IA.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2560&q=80" }], tags: ["ia", "abstrato", "arte", "fluido"], resolution: "1920x1080" },
  { slug: "ia-neural-network", title: "Rede Neural AI Visual", category: "ia", description: "Visual de rede neural estilo IA.", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2560&q=80" }], tags: ["ia", "neural", "tecnologia", "digital"], resolution: "1920x1080" },
  { slug: "geometria-minimalista", title: "Geometria Minimalista", category: "minimalista", description: "Formas suaves e cores sóbrias para um visual calmo.", image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=2560&q=80" }, { width: 3840, height: 2160, label: "4K", url: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=3840&q=80" }], tags: ["minimalista", "geometria", "paz", "design"], resolution: "3840x2160", isFeatured: true },
  { slug: "minimalista-branco", title: "Minimalista Branco Limpo", category: "minimalista", description: "Design branco limpo e moderno.", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=2560&q=80" }], tags: ["minimalista", "branco", "limpo"], resolution: "1920x1080" },
  { slug: "minimalista-preto", title: "Minimalista Preto Elegante", category: "minimalista", description: "Design preto elegante e minimalista.", image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2560&q=80" }], tags: ["minimalista", "preto", "elegante"], resolution: "1920x1080" },
  { slug: "folhagem-verde", title: "Folhagem Verde", category: "natureza", description: "Texturas de folhas verdes criam um wallpaper relaxante.", image: "https://images.unsplash.com/photo-1500534623283-312aade48564?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1500534623283-312aade48564?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1500534623283-312aade48564?auto=format&fit=crop&w=2560&q=80" }], tags: ["natureza", "folhagem", "verde", "folhas"], resolution: "3840x2160" },
  { slug: "floresta-nevoenta", title: "Floresta Nevoenta", category: "natureza", description: "Floresta coberta por névoa com atmosphere mystica.", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2560&q=80" }], tags: ["natureza", "floresta", "nevoa"], resolution: "1920x1080" },
  { slug: "por-do-sol", title: "Por do Sol Wallpaper", category: "natureza", description: "Pôr do sol spectacular.", image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=2560&q=80" }], tags: ["natureza", "sol", "pôr do sol", "laranja"], resolution: "1920x1080" },
  { slug: "rede-digital", title: "Rede Digital", category: "tecnologia", description: "Conexões futuristas e formas geométricas em um visual tech.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2560&q=80" }], tags: ["tecnologia", "futuro", "digital", "rede"], resolution: "3840x2160" },
  { slug: "circuito-eletronico", title: "Circuito Eletrônico", category: "tecnologia", description: "Placa de circuito integrado style.", image: "https://images.unsplash.com/photo-1605218427368-35b0e10c5bb9?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1605218427368-35b0e10c5bb9?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1605218427368-35b0e10c5bb9?auto=format&fit=crop&w=2560&q=80" }], tags: ["tecnologia", "circuito", "eletronica"], resolution: "1920x1080" },
  { slug: "pinceladas-coloridas", title: "Pinceladas Coloridas", category: "abstrato", description: "Texturas e cores que criam uma composição abstrata vibrante.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2560&q=80" }], tags: ["abstrato", "cores", "arte", "textura"], resolution: "3840x2160" },
  { slug: "arte-digital-colorida", title: "Arte Digital Colorida", category: "abstrato", description: "Arte digital abstract vibrante.", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=2560&q=80" }], tags: ["abstrato", "arte", "cores", "digital"], resolution: "1920x1080" },
  { slug: "lua-sobre-a-cidade", title: "Lua Sobre a Cidade", category: "cidade", description: "Um céu estrelado com a lua acima de edifícios iluminados.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2560&q=80" }], tags: ["cidade", "lua", "noite", "céu"], resolution: "3840x2160" },
  { slug: "skyline-noturno", title: "Skyline Noturno", category: "cidade", description: "Arranha-céus illuminados à noite.", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2560&q=80" }], tags: ["cidade", "skyline", "noite", "arranha-céu"], resolution: "1920x1080" },
  { slug: "anime-paisagem-futurista", title: "Anime Paisagem Futurista", category: "anime", description: "Paisagem estilo anime futurista.", image: "https://images.unsplash.com/photo-1578632767115-351597cf9577?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1578632767115-351597cf9577?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1578632767115-351597cf9577?auto=format&fit=crop&w=2560&q=80" }], tags: ["anime", "futuro", "anime style"], resolution: "1920x1080", isFeatured: true },
  { slug: "anime-arte-digital", title: "Anime Arte Digital", category: "anime", description: "Arte estilo anime digital.", image: "https://images.unsplash.com/photo-1614726365723-49cfae987a22?auto=format&fit=crop&w=600&q=80", downloads: [{ width: 1920, height: 1080, label: "HD", url: "https://images.unsplash.com/photo-1614726365723-49cfae987a22?auto=format&fit=crop&w=1920&q=80" }, { width: 2560, height: 1440, label: "2K", url: "https://images.unsplash.com/photo-1614726365723-49cfae987a22?auto=format&fit=crop&w=2560&q=80" }], tags: ["anime", "arte", "digital"], resolution: "1920x1080" },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getWallpaper(slug: string) {
  return wallpapersData.find((wallpaper) => wallpaper.slug === slug);
}

export function getWallpapersByCategory(catSlug: string) {
  return wallpapersData.filter((wallpaper) => wallpaper.category === catSlug);
}

export function getLatestWallpapers(limit = 6) {
  return wallpapersData.slice(0, limit);
}

export function getCategoryCount(catSlug: string) {
  return wallpapersData.filter((wallpaper) => wallpaper.category === catSlug).length;
}

export function searchWallpapers(query: string) {
  const q = query.toLowerCase();
  return wallpapersData.filter(
    (w) =>
      w.title.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      w.tags.some((t) => t.toLowerCase().includes(q)) ||
      w.category.toLowerCase().includes(q)
  );
}

export function getAllWallpapers(): Wallpaper[] {
  return wallpapersData;
}