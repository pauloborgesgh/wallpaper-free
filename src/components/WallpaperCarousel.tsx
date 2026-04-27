"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Wallpaper } from "@/data/wallpapers";

interface CategoryCarouselProps {
  categories: { slug: string; name: string; icon: string }[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

function CategoryCarousel({ categories, activeIndex, onSelect }: CategoryCarouselProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat, idx) => (
        <button
          key={cat.slug}
          onClick={() => onSelect(idx)}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
            activeIndex === idx
              ? "border-transparent text-white"
              : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]"
          }`}
          style={{
            background: activeIndex === idx ? 'var(--foreground)' : 'var(--surface)',
            color: activeIndex === idx ? 'var(--background)' : 'var(--foreground)',
            borderColor: activeIndex === idx ? 'transparent' : 'var(--border)',
          }}
        >
          <span className="mr-2">{cat.icon}</span>
          {cat.name}
        </button>
      ))}
    </div>
  );
}

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

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + wallpapers.length) % wallpapers.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wallpapers.length);
  };

  const celularSize = wallpapers[currentIndex]?.downloads.find(d => d.height > d.width) || wallpapers[currentIndex]?.downloads[0];
  const desktopSize = wallpapers[currentIndex]?.downloads.find(d => d.width > d.height) || wallpapers[currentIndex]?.downloads[0];

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

  return (
    <div 
      className="relative overflow-hidden rounded-3xl"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="relative h-[400px] w-full bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url(${wallpapers[currentIndex].image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
              {wallpapers[currentIndex].category}
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {wallpapers[currentIndex].title}
            </h2>
            <p className="mt-2 text-white/80">
              {wallpapers[currentIndex].description}
            </p>
            
            <div className="mt-4 flex gap-3">
              <button
                onClick={(e) => handleDownload(e, celularSize?.url || '', `${wallpapers[currentIndex].slug}-celular`)}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white/90"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Celular
              </button>
              <button
                onClick={(e) => handleDownload(e, desktopSize?.url || '', `${wallpapers[currentIndex].slug}-desktop`)}
                className="flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Desktop
              </button>
              <Link
                href={`/wallpaper/${wallpapers[currentIndex].slug}`}
                className="flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver mais
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition hover:bg-white/30"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 backdrop-blur-sm transition hover:bg-white/30"
        >
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {wallpapers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}