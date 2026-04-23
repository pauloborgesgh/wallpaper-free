import Image from "next/image";
import Link from "next/link";
import type { Wallpaper } from "@/data/wallpapers";

export default function WallpaperCard({ wallpaper }: { wallpaper: Wallpaper }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href={`/wallpaper/${wallpaper.slug}`} className="block overflow-hidden">
        <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
          <Image
            src={wallpaper.image}
            alt={wallpaper.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
          <span>{wallpaper.category}</span>
          <span>{wallpaper.resolution}</span>
        </div>
        <div className="space-y-2">
          <Link href={`/wallpaper/${wallpaper.slug}`} className="text-lg font-semibold text-zinc-950 transition hover:text-zinc-700">
            {wallpaper.title}
          </Link>
          <p className="text-sm leading-6 text-zinc-600">{wallpaper.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {wallpaper.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
