"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import WallpaperCard from "@/components/WallpaperCard";
import { getAllWallpapers, type Wallpaper } from "@/data/wallpapers";

export default function FavoritesPage() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Wallpaper[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wallpaper_favorites");
    if (stored) {
      const slugs = JSON.parse(stored) as string[];
      setFavoriteSlugs(slugs);
      
      const allWallpapers = getAllWallpapers();
      const favoriteWallpapers = allWallpapers.filter(w => slugs.includes(w.slug));
      setFavorites(favoriteWallpapers);
    }
  }, []);

  const removeFavorite = (slug: string) => {
    const newFavorites = favoriteSlugs.filter(s => s !== slug);
    setFavoriteSlugs(newFavorites);
    localStorage.setItem("wallpaper_favorites", JSON.stringify(newFavorites));
    setFavorites(prev => prev.filter(w => w.slug !== slug));
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="space-y-6 rounded-[2rem] bg-white p-10 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-600">Favoritos</p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Meus wallpapers salvos
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-600">
              {favorites.length === 0
                ? "Você ainda não tem wallpapers favoritos salvos."
                : `${favorites.length} wallpaper${favorites.length !== 1 ? "s" : ""} salvo${favorites.length !== 1 ? "s" : ""}`}
            </p>
          </div>
        </div>

        {favorites.length === 0 && (
          <div className="mt-10 rounded-[2rem] bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-zinc-600">Nenhum wallpaper salvo ainda.</p>
            <p className="mt-2 text-sm text-zinc-500">
              Clique no ícone de coração em qualquer wallpaper para salvá-lo.
            </p>
            <Link href="/category" className="mt-4 inline-block text-sm font-semibold text-zinc-950 underline">
              Explorar wallpapers
            </Link>
          </div>
        )}

        {favorites.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {favorites.map((wallpaper) => (
              <WallpaperCard key={wallpaper.slug} wallpaper={wallpaper} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}