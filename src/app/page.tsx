import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import WallpaperCarousel from "@/components/WallpaperCarousel";
import AdBanner from "@/components/AdBanner";
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

export default function Home() {
  const allWallpapers = getAllWallpapers();
  const featuredWallpapers = allWallpapers.filter(w => w.isFeatured).slice(0, 6);
  
  const categoryIcons: Record<string, string> = {
    celular: "📱",
    "4k": "🖥️",
    jogos: "🎮",
    frases: "💬",
    ia: "🤖",
    minimalista: "◻️",
    natureza: "🌿",
    tecnologia: "⚡",
    abstrato: "🎨",
    anime: "✨",
    cidade: "🌆",
  };

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
              <h2 className="text-2xl font-bold">Categorias</h2>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Explore por tema</p>
            </div>
            <Link href="/category" className="text-sm font-semibold underline underline-offset-4 transition hover:opacity-80">
              Ver todas
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="card group relative overflow-hidden rounded-2xl p-4 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 flex h-12 w-12 mx-auto items-center justify-center rounded-xl text-xl" style={{ background: 'var(--border)' }}>
                  {categoryIcons[category.slug] || "🖼️"}
                </div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>
                  Ver categoria
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <AdBanner />
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Destaques</h2>
              <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Wallpapers em destaque</p>
            </div>
            <Link href="/category" className="text-sm font-semibold underline underline-offset-4 transition hover:opacity-80">
              Ver todos
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWallpapers.map((wallpaper) => {
              const celularSize = wallpaper.downloads.find(d => d.height > d.width) || wallpaper.downloads[0];
              const desktopSize = wallpaper.downloads.find(d => d.width > d.height) || wallpaper.downloads[0];
              
              return (
                <Link
                  key={wallpaper.slug}
                  href={`/wallpaper/${wallpaper.slug}`}
                  className="card group relative overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden" style={{ background: 'var(--border)' }}>
                    <img
                      src={wallpaper.image}
                      alt={wallpaper.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <span 
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
                      >
                        📱 Celular
                      </span>
                      <span 
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{ background: 'var(--surface)', color: 'var(--foreground)' }}
                      >
                        💻 Desktop
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{wallpaper.title}</h3>
                    <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{wallpaper.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        

<div className="mt-12 pb-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Download rápido</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>Baixe em alta resolução sem esperar</p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Celular e Desktop</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>Otimizado para qualquer dispositivo</p>
            </div>
            <div className="card rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Favoritos</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>Salve seus wallpapers preferidos</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="rounded-xl px-3 py-1 text-sm font-medium" style={{ background: 'var(--foreground)', color: 'var(--background)' }}>
                WP
              </span>
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