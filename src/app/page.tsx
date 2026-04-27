import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import WallpaperCarousel from "@/components/WallpaperCarousel";
import AdBanner from "@/components/AdBanner";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categories, getAllWallpapers } from "@/data/wallpapers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallpapers BR - Wallpapers gratuitos para celular e desktop",
  description: "Baixe wallpapers gratuitos em alta resolução. Categorias: celular, 4K, jogos, frases, minimalista e mais. wallpapers para Android e iPhone.",
  keywords: "wallpaper, wallpaper celular, wallpaper 4k, wallpaper hd, wallpaper download, fundo de tela",
  openGraph: {
    title: "Wallpapers BR - Wallpapers gratuitos",
    description: "Baixe wallpapers gratuitos em alta resolução para celular e desktop.",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  celular: "#10b981",
  "4k": "#6366f1",
  jogos: "#f59e0b",
  frases: "#ec4899",
  ia: "#8b5cf6",
  minimalista: "#64748b",
  natureza: "#22c55e",
  tecnologia: "#06b6d4",
  abstrato: "#f43f5e",
  anime: "#eab308",
  cidade: "#64748b",
};

export default function Home() {
  const allWallpapers = getAllWallpapers();
  const featuredWallpapers = allWallpapers.filter(w => w.isFeatured).slice(0, 6);

  return (
    <main className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <WallpaperCarousel wallpapers={allWallpapers} />
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Categorias</h2>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Navegue por tipo de wallpaper</p>
            </div>
            <Link href="/category" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: 'var(--foreground)' }}>
              Ver todas
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-xl border border-transparent p-4 transition-all hover:border-[var(--border)] hover:shadow-sm"
                style={{ background: 'var(--surface)' }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${categoryColors[category.slug] || '#64748b'}15`, color: categoryColors[category.slug] || '#64748b' }}
                  >
                    <CategoryIcon category={category.slug} className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium truncate">{category.name}</h3>
                    <p className="text-xs truncate" style={{ color: 'var(--muted)' }}>
                      {category.description.split('.')[0]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <AdBanner />
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Destaques</h2>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Wallpapers mais populares</p>
            </div>
            <Link href="/category" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: 'var(--foreground)' }}>
              Ver todos
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWallpapers.map((wallpaper) => (
              <Link
                key={wallpaper.slug}
                href={`/wallpaper/${wallpaper.slug}`}
                className="group block overflow-hidden rounded-2xl transition-all hover:shadow-lg"
                style={{ background: 'var(--surface)' }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={wallpaper.image}
                    alt={wallpaper.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <div className="flex items-center gap-2">
                      <span 
                        className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-900 backdrop-blur-sm"
                      >
                        Celular
                      </span>
                      <span 
                        className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-900 backdrop-blur-sm"
                      >
                        Desktop
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold truncate">{wallpaper.title}</h3>
                  <p className="mt-1 text-sm truncate" style={{ color: 'var(--muted)' }}>{wallpaper.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div 
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                style={{ background: 'var(--foreground)', color: 'var(--background)' }}
              >
                WP
              </div>
              <span className="font-semibold">Wallpapers BR</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              © 2026 Wallpapers BR. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}