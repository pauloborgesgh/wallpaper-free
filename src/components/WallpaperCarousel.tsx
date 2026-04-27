"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { Wallpaper } from "@/data/wallpapers";

interface WallpaperCarouselProps {
  wallpapers: Wallpaper[];
}

export default function WallpaperCarousel({ wallpapers }: WallpaperCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wallpapers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, wallpapers.length]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + wallpapers.length) % wallpapers.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wallpapers.length);
  };

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

  if (wallpapers.length === 0) return null;

  const currentWallpaper = wallpapers[currentIndex];
  const celularSize = currentWallpaper.downloads.find(d => d.height > d.width) || currentWallpaper.downloads[0];
  const desktopSize = currentWallpaper.downloads.find(d => d.width > d.height) || currentWallpaper.downloads[0];

  return (
    <div 
      className="relative overflow-hidden rounded-2xl"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="relative h-[400px] w-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${currentWallpaper.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-zinc-950/20" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
              {currentWallpaper.category}
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {currentWallpaper.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              {currentWallpaper.description}
            </p>
            
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={(e) => handleDownload(e, celularSize?.url || '', `${currentWallpaper.slug}-celular`)}
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Celular
              </button>
              <button
                onClick={(e) => handleDownload(e, desktopSize?.url || '', `${currentWallpaper.slug}-desktop`)}
                className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Desktop
              </button>
              <Link
                href={`/wallpaper/${currentWallpaper.slug}`}
                className="flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-sm transition hover:bg-white/20 hover:text-white sm:left-4"
          aria-label="Slide anterior"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/80 backdrop-blur-sm transition hover:bg-white/20 hover:text-white sm:right-4"
          aria-label="Próximo slide"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-6">
          {wallpapers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all ${
                idx === currentIndex ? "w-6 bg-white" : "w-1 bg-white/50"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}