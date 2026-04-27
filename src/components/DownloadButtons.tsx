"use client";

import type { DownloadSize } from "@/data/wallpapers";

interface DownloadButtonsProps {
  downloads: DownloadSize[];
  title: string;
}

export default function DownloadButtons({ downloads, title }: DownloadButtonsProps) {
  const celularSize = downloads.find(d => d.height > d.width) || downloads[0];
  const desktopSize = downloads.find(d => d.width > d.height) || downloads[0];

  const handleDownload = async (url: string, filename: string) => {
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
    <div className="space-y-3">
      <button
        onClick={() => handleDownload(celularSize.url, `${title}-celular`)}
        className="btn btn-primary flex w-full justify-between"
      >
        <span className="flex items-center gap-2">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          Baixar para Celular
        </span>
        <span className="text-sm opacity-80">{celularSize.width}x{celularSize.height}</span>
      </button>
      
      <button
        onClick={() => handleDownload(desktopSize.url, `${title}-desktop`)}
        className="btn btn-secondary flex w-full justify-between"
      >
        <span className="flex items-center gap-2">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Baixar para Desktop
        </span>
        <span className="text-sm opacity-80">{desktopSize.width}x{desktopSize.height}</span>
      </button>
    </div>
  );
}