import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdBanner from "@/components/AdBanner";
import SiteHeader from "@/components/SiteHeader";
import { getCategory, getWallpapersByCategory } from "@/data/wallpapers";

type Props = {
  params: {
    slug: string;
  };
};

export default function CategorySlugPage({ params }: Props) {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const wallpapers = getWallpapersByCategory(params.slug);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-600">Categoria</p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">{category.name}</h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-600">{category.description}</p>
            <p className="text-sm text-zinc-500">{wallpapers.length} wallpapers disponíveis</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {wallpapers.map((wallpaper) => (
            <article key={wallpaper.slug} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <Link href={`/wallpaper/${wallpaper.slug}`} className="block overflow-hidden">
                <div className="relative h-64 w-full bg-zinc-100">
                  <Image
                    src={wallpaper.image}
                    alt={wallpaper.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link href={`/wallpaper/${wallpaper.slug}`} className="text-lg font-semibold text-zinc-950 transition hover:text-zinc-700">
                  {wallpaper.title}
                </Link>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{wallpaper.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <AdBanner label="Anúncio integrado à categoria" />
        </div>
      </section>
    </main>
  );
}
