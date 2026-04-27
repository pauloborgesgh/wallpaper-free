import CategoryCard from "@/components/CategoryCard";
import SiteHeader from "@/components/SiteHeader";
import { categories, getCategoryCount } from "@/data/wallpapers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorias - Wallpapers BR",
  description: "Navegue por categorias de wallpapers: celular, 4K, jogos, frases motivacionais, minimalista, natureza e mais.",
};

export default function CategoryPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="card rounded-[2rem] p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Categorias</p>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-zinc-950 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-50 dark:to-zinc-400">
              Explore wallpapers por tema
            </h1>
            <p className="max-w-2xl text-base leading-8" style={{ color: 'var(--muted)' }}>
              Selecione uma categoria para ver os wallpapers disponíveis e fazer download direto.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} count={getCategoryCount(category.slug)} />
          ))}
        </div>
      </section>
    </main>
  );
}