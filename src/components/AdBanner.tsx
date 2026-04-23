export default function AdBanner({ label = "Anúncio responsivo" }: { label?: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center text-sm text-zinc-700">
      <span className="block text-xs uppercase tracking-[0.24em] text-zinc-500">AdSense</span>
      <p className="mt-2 text-base font-semibold text-zinc-900">{label}</p>
      <p className="mt-1 text-sm text-zinc-600">Espaço reservado para anúncios no layout.</p>
    </div>
  );
}
