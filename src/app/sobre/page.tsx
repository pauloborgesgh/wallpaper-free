import SiteHeader from "@/components/SiteHeader";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-semibold text-zinc-950">Sobre o site</h1>
          <p className="mt-6 text-base leading-8 text-zinc-600">
            Este site é um exemplo de galeria de wallpapers com foco em navegação simples, categorias bem organizadas e downloads fáceis.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-7 text-zinc-600">
            <p>
              O objetivo é oferecer uma experiência leve e rápida, com imagens otimizadas e uma estrutura que pode receber anúncios de forma natural.
            </p>
            <p>
              Use os recursos da barra de categorias para encontrar wallpapers por tema, e abra a página de cada imagem para baixar em alta resolução.
            </p>
            <p>
              As imagens de exemplo vêm de fontes externas e servem para demonstrar o layout do projeto. Em um site real, é importante ter imagens com direitos autorizados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
