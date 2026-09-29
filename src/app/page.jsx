import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between items-center px-8 py-5 border-b bg-white sticky top-0 z-50">
    <div>
      <div className="text-2xl font-bold tracking-tight">FLUXORA</div>
      <span className="text-xs text-slate-500">Gestão inteligente de materiais</span>
    </div>

        <div className="flex gap-6 text-sm text-slate-600">
          <Link href="/">Início</Link>
          <Link href="#recursos">Recursos</Link>
          <Link href="#contato">Contato</Link>
        </div>
        <Link href="/demo">
          <Button className="rounded-full px-6">
            Ver demonstração
          </Button>
        </Link>
      </header>
      <section className="relative overflow-hidden px-8 py-24 bg-slate-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.10),_transparent_55%)]" />
        <div className="relative flex flex-col items-center text-center gap-10">
          <div>
  <span className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-xs font-semibold tracking-widest text-slate-600 shadow-sm">
  GESTÃO INTELIGENTE PARA INDÚSTRIAS
  </span>

  <h1 className="text-6xl font-bold tracking-tight leading-tight text-slate-900 max-w-5xl">
  Sua matéria-prima sob controle. Sua indústria em movimento.
  </h1>

  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
  Organize materiais, acompanhe estoques e identifique necessidades antes que elas parem sua operação.
  </p>

  <div className="flex gap-4 mt-7">
    <Link href="/demo">
  <Button>
    Ver demonstração
  </Button>
</Link>
    <Link href="#recursos">
      <Button variant="outline" className="rounded-full px-6">
        Conhecer a Fluxora
      </Button>
    </Link>
  </div>
</div>
        <div className="w-full max-w-4xl">
          <Card className="w-full rounded-2xl border-slate-200 bg-white shadow-xl">
  <CardHeader>
    <CardTitle>Dashboard Fluxora</CardTitle>
  </CardHeader>

  <CardContent className="pt-6 pb-8">
      <div className="grid grid-cols-4 gap-6 mt-4">
        <div>
       <p className="text-3xl font-bold tracking-tight">24</p>
        <span className="text-sm text-slate-500">Materiais</span>
      </div>
        <div>
        <p className="text-3xl font-bold tracking-tight">16</p>
        <span className="text-sm text-slate-500">Normais</span>
      </div>
      <div>
        <p className="text-3xl font-bold tracking-tight">5</p>
        <span className="text-sm text-slate-500">Estoque baixo</span>
      </div>
      <div>
        <p className="text-3xl font-bold tracking-tight">3</p>
        <span className="text-sm text-slate-500">Sem estoque</span>
      </div>
      </div>
  </CardContent>
          </Card>
        </div>
        </div>
      </section>
      <section id="beneficios" className="px-8 py-24 bg-white">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Tudo o que sua indústria precisa
        </h2>

        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          Tenha mais controle sobre seus materiais e tome decisões com mais segurança.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Controle de estoque</CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                Acompanhe a quantidade disponível de cada material.
              </p>
            </CardContent>
          </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Alertas inteligentes</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p>
                      Identifique materiais com estoque baixo ou zerado.
                    </p>
                  </CardContent>
                </Card>
          <Card>
            <CardHeader>
              <CardTitle>Decisões mais rápidas</CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                Tenha informações organizadas para melhorar sua operação.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
        <section id="recursos" className="px-8 py-16">
          <h2 className="text-3xl font-bold">
            Recursos da Fluxora
          </h2>

          <p className="mt-2 text-slate-600">
            Ferramentas para facilitar o controle de materiais da sua indústria.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Cadastro de materiais</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-slate-600">
              Organize os materiais utilizados pela sua indústria.
            </p>
          </CardContent>
        </Card>
                <Card>
          <CardHeader>
            <CardTitle>Controle de estoque</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-slate-600">
              Acompanhe quantidades e identifique níveis de estoque.
            </p>
          </CardContent>
        </Card>
                <Card>
          <CardHeader>
            <CardTitle>Busca e filtros</CardTitle>
          </CardHeader>

  <CardContent>
    <p className="text-sm text-slate-600">
      Encontre rapidamente os materiais que você precisa.
    </p>
  </CardContent>
</Card>
          </div>
        </section>
    </main>
  );
}