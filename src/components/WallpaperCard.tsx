"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Wallpaper } from "@/data/wallpapers";

export default function WallpaperCard({ wallpaper }: { wallpaper: Wallpaper }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("wallpaper_favorites") || "[]");
    setIsFavorite(favorites.includes(wallpaper.slug));
  }, [wallpaper.slug]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const favorites = JSON.parse(localStorage.getItem("wallpaper_favorites") || "[]");
    let newFavorites;
    
    if (favorites.includes(wallpaper.slug)) {
      newFavorites = favorites.filter((s: string) => s !== wallpaper.slug);
    } else {
      newFavorites = [...favorites, wallpaper.slug];
    }
    
    localStorage.setItem("wallpaper_favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const celularSize = wallpaper.downloads.find(d => d.height > d.width) || wallpaper.downloads[0];
  const desktopSize = wallpaper.downloads.find(d => d.width > d.height) || wallpaper.downloads[0];

  const handleDownload = async (e: React.MouseEvent, url: string, filename: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${filename}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      window.open(url, "_blank");
    }
  };

  return (
    <article className="card group relative overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/wallpaper/${wallpaper.slug}`} className="block overflow-hidden">
        <div className="relative h-56 w-full overflow-hidden" style={{ background: 'var(--border)' }}>
          <Image
            src={wallpaper.image}
            alt={wallpaper.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent p-3">
            <div className="flex gap-2">
              <button
                onClick={(e) => handleDownload(e, celularSize.url, wallpaper.slug + "-celular")}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-sm transition hover:opacity-90"
                style={{ background: 'var(--card-bg)', color: 'var(--card-text)' }}
                title="Baixar para celular"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Celular</span>
              </button>
              <button
                onClick={(e) => handleDownload(e, desktopSize.url, wallpaper.slug + "-desktop")}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-sm transition hover:opacity-90"
                style={{ background: 'var(--card-bg)', color: 'var(--card-text)' }}
                title="Baixar para desktop"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Desktop</span>
              </button>
            </div>
            <button
              onClick={toggleFavorite}
              className="rounded-full p-1.5 shadow-sm transition hover:opacity-90"
              style={{ background: 'var(--card-bg)' }}
              title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
              <svg
                className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "fill-none"}`}
                style={{ color: isFavorite ? undefined : 'var(--muted)' }}
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
          <span>{wallpaper.category}</span>
          <span>{wallpaper.resolution}</span>
        </div>
        <div className="space-y-2">
          <Link href={`/wallpaper/${wallpaper.slug}`} className="text-lg font-semibold transition hover:opacity-80">
            {wallpaper.title}
          </Link>
          <p className="text-sm leading-6" style={{ color: 'var(--muted)' }}>{wallpaper.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {wallpaper.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full px-2 py-1 text-[11px] uppercase tracking-wider"
              style={{ background: 'var(--border)', color: 'var(--muted)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}