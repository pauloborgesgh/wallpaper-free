import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import WallpaperCard from "@/components/WallpaperCard";
import { getCategory, getWallpapersByCategory } from "@/data/wallpapers";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

const ITEMS_PER_PAGE = 12;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  
  if (!category) {
    return { title: "Categoria não encontrada" };
  }
  
  return {
    title: `${category.name} - Wallpapers ${category.name} download gratuito`,
    description: category.description,
  };
}

export default async function CategorySlugPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page } = await searchParams;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const allWallpapers = getWallpapersByCategory(slug);
  const currentPage = Math.max(1, parseInt(page || "1"));
  const totalPages = Math.ceil(allWallpapers.length / ITEMS_PER_PAGE);
  const paginatedWallpapers = allWallpapers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="card rounded-[2rem] p-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Categoria</p>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-zinc-950 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-400 sm:text-5xl">
              {category.name}
            </h1>
            <p className="max-w-2xl text-base leading-8" style={{ color: 'var(--muted)' }}>{category.description}</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>{allWallpapers.length} wallpapers disponíveis</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {paginatedWallpapers.map((wallpaper) => (
            <WallpaperCard key={wallpaper.slug} wallpaper={wallpaper} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/category/${slug}?page=${currentPage - 1}`}
                className="card rounded-full px-4 py-2 text-sm transition hover:opacity-80"
              >
                Anterior
              </Link>
            )}
            <span className="px-4 py-2 text-sm" style={{ color: 'var(--muted)' }}>
              {currentPage} / {totalPages}
            </span>
            {currentPage < totalPages && (
              <Link
                href={`/category/${slug}?page=${currentPage + 1}`}
                className="card rounded-full px-4 py-2 text-sm transition hover:opacity-80"
              >
                Próxima
              </Link>
            )}
          </div>
        )}
      </section>
    </main>
  );
}