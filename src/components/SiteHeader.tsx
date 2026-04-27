import Link from "next/link";
import { siteConfig } from "@/data/wallpapers";
import ThemeToggle from "./ThemeToggle";
import CategoriesMenu from "./CategoriesMenu";

export default function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold"
            style={{ background: 'var(--foreground)', color: 'var(--background)' }}
          >
            WP
          </div>
          <div>
            <span className="text-xl font-semibold tracking-tight">{siteConfig.title}</span>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>{siteConfig.description}</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <CategoriesMenu />
          <form action="/search" method="GET" className="hidden items-center lg:flex">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: 'var(--muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="search"
                name="q"
                placeholder="Buscar..."
                className="h-10 w-48 rounded-lg border py-2 pl-10 pr-4 text-sm transition-colors focus:w-64 focus:outline-none focus:ring-2"
                style={{ 
                  background: 'var(--surface)', 
                  borderColor: 'var(--border)', 
                  color: 'var(--foreground)',
                }}
              />
            </div>
          </form>
        </div>
      </div>

      <nav className="mt-5 flex flex-wrap items-center gap-1 text-sm" style={{ color: 'var(--muted)' }}>
        <Link href="/" className="rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
          Início
        </Link>
        <Link href="/category" className="rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
          Categorias
        </Link>
        <Link href="/favorites" className="rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
          Favoritos
        </Link>
        <Link href="/sobre" className="rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
          Sobre
        </Link>
        <Link href="/contato" className="rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]">
          Contato
        </Link>
      </nav>
    </header>
  );
}