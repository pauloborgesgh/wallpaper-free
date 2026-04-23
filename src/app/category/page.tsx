import CategoryCard from "@/components/CategoryCard";
import SiteHeader from "@/components/SiteHeader";
import AdBanner from "@/components/AdBanner";
import { categories, getCategoryCount } from "@/data/wallpapers";

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="space-y-6 rounded-[2rem] bg-white p-10 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-600">Categorias</p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Explore wallpapers por tema</h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-600">
              Selecione uma categoria para ver os wallpapers disponíveis e fazer download direto.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} count={getCategoryCount(category.slug)} />
          ))}
        </div>

        <div className="mt-10">
          <AdBanner label="Espaço para anúncios na categoria" />
        </div>
      </section>
    </main>
  );
}
