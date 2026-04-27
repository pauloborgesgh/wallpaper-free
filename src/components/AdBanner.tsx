export default function AdBanner({ label = "Publicidade" }: { label?: string }) {
  return (
    <div 
      className="flex min-h-[90px] items-center justify-center rounded-2xl border-2 border-dashed"
      style={{ 
        background: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
          {label}
        </p>
      </div>
    </div>
  );
}