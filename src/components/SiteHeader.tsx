import Link from "next/link";
import { categories, siteConfig } from "@/data/wallpapers";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-semibold text-zinc-950">
            <span className="rounded-2xl bg-zinc-950 px-3 py-1 text-sm font-medium text-white">
              WP
            </span>
            {siteConfig.title}
          </Link>
          <p className="mt-1 text-sm text-zinc-600">{siteConfig.description}</p>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-zinc-700">
          <Link href="/" className="rounded-full px-3 py-2 transition hover:bg-zinc-100">
            Início
          </Link>
          <Link href="/category" className="rounded-full px-3 py-2 transition hover:bg-zinc-100">
            Categorias
          </Link>
          <Link href="/sobre" className="rounded-full px-3 py-2 transition hover:bg-zinc-100">
            Sobre
          </Link>
          <Link href="/contato" className="rounded-full px-3 py-2 transition hover:bg-zinc-100">
            Contato
          </Link>
          <Link href="/politica" className="rounded-full px-3 py-2 transition hover:bg-zinc-100">
            Política
          </Link>
        </nav>
      </div>

      <div className="hidden items-center justify-start gap-3 overflow-x-auto whitespace-nowrap rounded-3xl border border-zinc-200 bg-white p-3 shadow-sm sm:flex">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
