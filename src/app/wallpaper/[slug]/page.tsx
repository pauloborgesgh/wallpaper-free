import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { getWallpaper } from "@/data/wallpapers";

type Props = {
  params: {
    slug: string;
  };
};

export default function WallpaperPage({ params }: Props) {
  const wallpaper = getWallpaper(params.slug);

  if (!wallpaper) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_0.5fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-zinc-100 sm:h-[520px]">
              <Image
                src={wallpaper.image}
                alt={wallpaper.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
                <span>{wallpaper.category}</span>
                <span className="text-zinc-300">•</span>
                <span>{wallpaper.resolution}</span>
              </div>
              <h1 className="text-4xl font-semibold text-zinc-950 sm:text-5xl">{wallpaper.title}</h1>
              <p className="max-w-3xl text-base leading-8 text-zinc-600">{wallpaper.description}</p>
              <div className="flex flex-wrap gap-3">
                {wallpaper.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-100 px-3 py-2 text-sm text-zinc-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-950">Baixar agora</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Clique no botão para abrir o wallpaper em alta resolução e baixar.</p>
              <a
                href={wallpaper.download}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Baixar wallpaper
              </a>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-950">Navegar em</h3>
              <Link href="/category" className="mt-3 block text-sm text-zinc-700 transition hover:text-zinc-900">
                Voltar para categorias
              </Link>
              <Link href="/" className="mt-2 block text-sm text-zinc-700 transition hover:text-zinc-900">
                Página inicial
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
