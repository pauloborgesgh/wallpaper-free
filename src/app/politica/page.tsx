import SiteHeader from "@/components/SiteHeader";

export default function PoliticaPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="rounded-[2rem] bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-semibold text-zinc-950">Política de Privacidade</h1>
          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600">
            <p>
              Este site usa dados de imagens para demonstrar um layout de wallpaper. Não coletamos informações pessoais no exemplo atual.
            </p>
            <p>
              Quando você usar anúncios reais como AdSense, será necessário incluir política de privacidade completa e deixar claro como os dados de navegação são tratados.
            </p>
            <p>
              Recomendamos também ter um aviso sobre cookies e um formulário de contato para usuários que desejem excluir ou corrigir seus dados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
