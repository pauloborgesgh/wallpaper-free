import Link from "next/link";
import type { Category } from "@/data/wallpapers";

export default function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group block rounded-3xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-zinc-950">{category.name}</h2>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
          {count} wallpapers
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-600">{category.description}</p>
    </Link>
  );
}
