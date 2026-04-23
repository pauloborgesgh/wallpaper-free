import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import CategoryCard from "@/components/CategoryCard";
import SiteHeader from "@/components/SiteHeader";
import WallpaperCard from "@/components/WallpaperCard";
import { categories, getCategoryCount, getLatestWallpapers } from "@/data/wallpapers";

export default function Home() {
  const wallpapers = getLatestWallpapers();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6 rounded-[2rem] bg-white p-10 shadow-sm">
            <p className="inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-600">
              Wallpapers grátis
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Baixe wallpapers incríveis por categoria.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-zinc-600">
                Navegue por categorias, escolha o wallpaper que combina com seu estilo e baixe em alta resolução.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/category" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
                Ver categorias
              </Link>
              <Link href="/contato" className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100">
                Fale conosco
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-950">Categorias populares</h2>
              <p className="mt-2 text-sm text-zinc-600">Acesse coleções preparadas para diferentes estilos de tela.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} count={getCategoryCount(category.slug)} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <AdBanner label="Anúncio em destaque" />

          <div className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Wallpapers recentes</h2>
                <p className="text-sm text-zinc-600">Escolha seu próximo fundo de tela para desktop ou celular.</p>
              </div>
              <Link href="/category" className="text-sm font-semibold text-zinc-950 underline underline-offset-4 transition hover:text-zinc-700">
                Ver todas as categorias
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {wallpapers.map((wallpaper) => (
                <WallpaperCard key={wallpaper.slug} wallpaper={wallpaper} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
