import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import DownloadButtons from "@/components/DownloadButtons";
import { getWallpaper, categories } from "@/data/wallpapers";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wallpaper = getWallpaper(slug);
  
  if (!wallpaper) {
    return { title: "Wallpaper não encontrado" };
  }
  
  return {
    title: `${wallpaper.title} - Wallpaper ${wallpaper.category} ${wallpaper.resolution} download`,
    description: wallpaper.description,
    openGraph: {
      title: wallpaper.title,
      description: wallpaper.description,
      images: [wallpaper.image],
    },
  };
}

export default async function WallpaperPage({ params }: Props) {
  const { slug } = await params;
  const wallpaper = getWallpaper(slug);

  if (!wallpaper) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_0.5fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm dark:bg-zinc-900 sm:p-8">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 sm:h-[520px]">
              <Image
                src={wallpaper.image}
                alt={wallpaper.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
                priority
              />
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                <Link href={`/category/${wallpaper.category}`} className="hover:text-zinc-700 dark:hover:text-zinc-200">
                  {categories.find(c => c.slug === wallpaper.category)?.name || wallpaper.category}
                </Link>
                <span className="text-zinc-300">•</span>
                <span>{wallpaper.resolution}</span>
              </div>
              <h1 className="text-4xl font-semibold text-zinc-950 dark:text-zinc-50 sm:text-5xl">{wallpaper.title}</h1>
              <p className="max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400">{wallpaper.description}</p>
              <div className="flex flex-wrap gap-3">
                {wallpaper.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-100 px-3 py-2 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">Baixar wallpaper</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Escolha o tamanho para baixar:</p>
              
              <div className="mt-4">
                <DownloadButtons downloads={wallpaper.downloads} title={wallpaper.slug} />
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">Navegar em</h3>
              <Link href="/category" className="mt-3 block text-sm text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100">
                Todas as categorias
              </Link>
              <Link href="/" className="mt-2 block text-sm text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100">
                Página inicial
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}