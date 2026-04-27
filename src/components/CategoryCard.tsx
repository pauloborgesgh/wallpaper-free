import Link from "next/link";
import type { Category } from "@/data/wallpapers";

type Props = {
  category: Category;
  count: number;
};

export default function CategoryCard({ category, count }: Props) {
  const getIcon = (slug: string) => {
    const icons: Record<string, string> = {
      celular: "📱",
      "4k": "🖥️",
      jogos: "🎮",
      frases: "💬",
      ia: "🤖",
      minimalista: "◻️",
      natureza: "🌿",
      tecnologia: "⚡",
      abstrato: "🎨",
      anime: "✨",
      cidade: "🌆",
    };
    return icons[slug] || "🖼️";
  };

  return (
    <Link href={`/category/${category.slug}`} className="card group block overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl" style={{ background: 'var(--border)' }}>
          {getIcon(category.slug)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold group-hover:opacity-80">{category.name}</h3>
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{category.description}</p>
          <p className="mt-2 text-xs font-medium" style={{ color: 'var(--muted)' }}>
            {count} wallpapers
          </p>
        </div>
      </div>
    </Link>
  );
}