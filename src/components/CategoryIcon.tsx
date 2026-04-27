interface CategoryIconProps {
  category: string;
  className?: string;
}

export function CategoryIcon({ category, className }: CategoryIconProps) {
  const icons: Record<string, React.ReactNode> = {
    celular: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    "4k": (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M17 8l2-2" />
        <path d="M17 12l2-2" />
        <path d="M17 16l2-2" />
      </svg>
    ),
    jogos: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" />
        <line x1="18" y1="11" x2="18.01" y2="11" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
      </svg>
    ),
    frases: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2.972V15c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .004-1 1.031V21z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 2.972V15c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .004-1 1.031V21z" />
      </svg>
    ),
    ia: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1v1a2 2 0 0 1-2 2h-1v1.27c-.93.33-1.68 1.04-2 2.02V20a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1.7c-.34-.99-1.1-1.7-2-2.03V18H3a2 2 0 0 1-2-2v-1h1a7 7 0 0 1 7-7h1V5.73C6.4 4.39 6 3.74 6 3a2 2 0 0 1 2-2h4z" />
        <circle cx="9" cy="13" r="1" />
        <circle cx="15" cy="13" r="1" />
        <path d="M9 17h6" />
      </svg>
    ),
    minimalista: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
      </svg>
    ),
    natureza: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-6" />
        <path d="M12 8V3" />
        <path d="M5 10c2-2 4.5-3 7-3s5 1 7 3" />
        <path d="M8 15c1.5 1.5 3.5 2 6 2s4.5-.5 6-2" />
        <path d="M17 8c-1 1-2 1.5-3 2-1 .5-2 .5-3 0" />
      </svg>
    ),
    tecnologia: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="7" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="17" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    abstrato: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="17" r="3" />
        <path d="M9.5 9.5L14.5 14.5" />
        <path d="M5.5 17.5l3-3" />
        <path d="M15.5 5.5l3 3" />
      </svg>
    ),
    anime: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    cidade: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="6" height="12" rx="1" />
        <rect x="15" y="9" width="6" height="12" rx="1" />
        <path d="M3 21V9" />
        <path d="M21 21V9" />
        <path d="M9 9V3" />
        <path d="M15 9V3" />
        <path d="M9 21v-6" />
        <path d="M15 21v-6" />
        <rect x="9" y="14" width="6" height="7" />
      </svg>
    ),
  };

  return icons[category] || (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}