import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import WallpaperCard from "@/components/WallpaperCard";
import { categories, searchWallpapers } from "@/data/wallpapers";
import { Metadata } from "next";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q || "";
  
  return {
    title: query ? `Buscar: ${query} - Wallpapers BR` : "Buscar wallpapers",
    description: `Busca por ${query}. Encontre wallpapers gratuitos para celular e desktop.`,
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q || "";

  const results = query ? searchWallpapers(query) : [];

  return (
    <main className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="card rounded-[2rem] p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Busca</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {query ? `Resultados para "${query}"` : "Buscar wallpapers"}
            </h1>
            <p className="max-w-2xl text-base leading-8" style={{ color: 'var(--muted)' }}>
              {query 
                ? `${results.length} wallpaper${results.length !== 1 ? "s" : ""} encontrado${results.length !== 1 ? "s" : ""}`
                : "Digite um termo para buscar wallpapers por categoria, cor ou estilo."
              }
            </p>
          </div>
        </div>

        {query && results.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((wallpaper) => (
              <WallpaperCard key={wallpaper.slug} wallpaper={wallpaper} />
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="card mt-10 rounded-[2rem] p-10 text-center">
            <p className="text-lg" style={{ color: 'var(--muted)' }}>Nenhum wallpaper encontrado para "{query}".</p>
            <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>Tente buscar por outro termo ou navegue pelas categorias.</p>
            <Link href="/category" className="mt-4 inline-block text-sm font-semibold underline">
              Ver categorias
            </Link>
          </div>
        )}

        {!query && (
          <div className="mt-10 space-y-4">
            <h2 className="text-lg font-semibold">Categorias populares</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="card rounded-full border px-4 py-2 text-sm transition hover:opacity-80"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}