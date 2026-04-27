import Link from "next/link";
import { siteConfig } from "@/data/wallpapers";
import ThemeToggle from "./ThemeToggle";
import CategoriesMenu from "./CategoriesMenu";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-semibold">
            <span className="rounded-2xl px-3 py-1 text-sm font-medium" style={{ background: 'var(--foreground)', color: 'var(--background)' }}>
              WP
            </span>
            {siteConfig.title}
          </Link>
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{siteConfig.description}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <CategoriesMenu />
          <form action="/search" method="GET" className="hidden items-center gap-2 sm:flex">
            <input
              type="search"
              name="q"
              placeholder="Buscar wallpapers..."
              className="rounded-full border px-4 py-2 text-sm transition focus:outline-none focus:ring-2"
              style={{ 
                background: 'var(--surface)', 
                borderColor: 'var(--border)', 
                color: 'var(--foreground)',
              }}
            />
            <button
              type="submit"
              className="rounded-full px-4 py-2 text-sm font-semibold transition hover:opacity-80"
              style={{ background: 'var(--foreground)', color: 'var(--background)' }}
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      <nav className="flex flex-wrap items-center gap-3 text-sm" style={{ color: 'var(--muted)' }}>
        <Link href="/" className="rounded-full px-3 py-2 transition hover:opacity-80">
          Início
        </Link>
        <Link href="/category" className="rounded-full px-3 py-2 transition hover:opacity-80">
          Categorias
        </Link>
        <Link href="/favorites" className="rounded-full px-3 py-2 transition hover:opacity-80">
          Favoritos
        </Link>
        <Link href="/sobre" className="rounded-full px-3 py-2 transition hover:opacity-80">
          Sobre
        </Link>
        <Link href="/contato" className="rounded-full px-3 py-2 transition hover:opacity-80">
          Contato
        </Link>
      </nav>
    </header>
  );
}