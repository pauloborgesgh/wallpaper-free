import SiteHeader from "@/components/SiteHeader";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-semibold text-zinc-950">Contato</h1>
          <p className="mt-6 text-base leading-8 text-zinc-600">
            Tem dúvida ou sugestão? Use as informações abaixo para enviar uma mensagem.
          </p>
          <div className="mt-8 space-y-6 text-sm text-zinc-600">
            <div>
              <h2 className="text-lg font-semibold text-zinc-950">E-mail</h2>
              <p>contato@wallpapersbr.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-950">Mensagem</h2>
              <p>
                Se quiser adicionar mais categorias ou sugerir conteúdos, este é o melhor canal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
