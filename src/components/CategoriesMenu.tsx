"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/data/wallpapers";

export default function CategoriesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categoryIcons: Record<string, string> = {
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

  const halfLength = Math.ceil(categories.length / 2);
  const leftColumn = categories.slice(0, halfLength);
  const rightColumn = categories.slice(halfLength);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:opacity-80"
        style={{
          background: 'var(--surface)',
          borderColor: 'var(--border)',
          color: 'var(--foreground)',
        }}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Categorias
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full z-50 mt-2 w-[480px] overflow-hidden rounded-2xl border shadow-xl"
          style={{
            background: 'var(--surface)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="flex p-3">
            <div className="flex-1 space-y-1">
              {leftColumn.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:opacity-80"
                  style={{ color: 'var(--foreground)' }}
                >
                  <span className="text-lg">{categoryIcons[category.slug] || "🖼️"}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
            
            <div
              className="w-px"
              style={{ background: 'var(--border)' }}
            />
            
            <div className="flex-1 space-y-1">
              {rightColumn.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:opacity-80"
                  style={{ color: 'var(--foreground)' }}
                >
                  <span className="text-lg">{categoryIcons[category.slug] || "🖼️"}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div
            className="border-t p-2"
            style={{ borderColor: 'var(--border)' }}
          >
            <Link
              href="/category"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--foreground)' }}
            >
              Ver todas as categorias
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}