import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ClipboardList,
  Mail,
  Package,
  Search,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Warehouse,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const categoryData = [
  { name: "Metais", value: 4 },
  { name: "Plásticos", value: 3 },
  { name: "Eletrônicos", value: 3 },
  { name: "Químicos", value: 2 },
  { name: "Embalagens", value: 1 },
  { name: "Fixadores", value: 2 },
  { name: "Lubrificantes", value: 1 },
]

const materials = [
  {
    code: "MP-001",
    name: "Chapa de aço",
    quantity: 150,
    status: "Estoque baixo",
  },
  {
    code: "MP-002",
    name: "Bobina de alumínio",
    quantity: 320,
    status: "Normal",
  },
  {
    code: "MP-003",
    name: "Tubo de aço",
    quantity: 0,
    status: "Sem estoque",
  },
]

const chartPoints = [58, 76, 64, 88, 70, 96, 82, 108, 94, 118, 101, 128]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c2857] text-white">
              <Boxes className="h-5 w-5" />
            </div>

            <div>
              <div className="text-2xl font-bold tracking-tight text-[#7c2857]">
                FLUXORA
              </div>

              <div className="text-xs text-slate-500">
                Gestão inteligente de materiais
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#inicio"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7c2857]"
            >
              Início
            </Link>

            <Link
              href="#beneficios"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7c2857]"
            >
              Benefícios
            </Link>

            <Link
              href="#recursos"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7c2857]"
            >
              Recursos
            </Link>

            <Link
              href="#contato"
              className="text-sm font-medium text-slate-600 transition hover:text-[#7c2857]"
            >
              Contato
            </Link>
          </nav>

          <Button
            asChild
            className="rounded-full bg-[#7c2857] px-5 hover:bg-[#661f48]"
          >
            <Link href="/demo">
              Ver demonstração
            </Link>
          </Button>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden border-b border-slate-100"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c285708_1px,transparent_1px),linear-gradient(to_bottom,#7c285708_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge className="mb-6 rounded-full border border-[#7c2857]/20 bg-[#7c2857]/10 px-4 py-1.5 text-[#7c2857] hover:bg-[#7c2857]/10">
                GESTÃO INTELIGENTE PARA INDÚSTRIAS
              </Badge>

              <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">
                Sua matéria-prima sob controle.
                <span className="block text-[#7c2857]">
                  Sua indústria em movimento.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Organize materiais, acompanhe estoques e tome decisões com
                mais segurança através de uma gestão simples, visual e
                inteligente.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#7c2857] px-7 hover:bg-[#661f48]"
                >
                  <Link href="/demo">
                    Acessar demonstração
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-300 px-7"
                >
                  <Link href="#recursos">Conhecer recursos</Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7c2857]" />
                  Controle de estoque
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7c2857]" />
                  Indicadores em tempo real
                </div>
              </div>
            </div>

            <DashboardPreview />
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="rounded-full border border-[#7c2857]/20 bg-[#7c2857]/10 text-[#7c2857] hover:bg-[#7c2857]/10">
              POR QUE FLUXORA?
            </Badge>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Mais controle para sua operação
            </h2>

            <p className="mt-4 text-slate-600">
              Uma visão clara dos seus materiais para transformar dados em
              decisões mais rápidas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <BenefitCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Indicadores claros"
              description="Acompanhe os principais números do seu estoque através de uma interface visual e objetiva."
            />

            <BenefitCard
              icon={<Package className="h-6 w-6" />}
              title="Controle de materiais"
              description="Cadastre materiais, acompanhe quantidades e identifique rapidamente situações de estoque."
            />

            <BenefitCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Mais segurança"
              description="Tenha informações organizadas para reduzir erros e melhorar o planejamento da operação."
            />
          </div>
        </div>
      </section>

      <section
        id="recursos"
        className="border-y border-slate-100 bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Badge className="rounded-full border border-[#7c2857]/20 bg-[#7c2857]/10 text-[#7c2857] hover:bg-[#7c2857]/10">
                RECURSOS
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Tudo o que você precisa para controlar seus materiais
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                O Fluxora reúne as informações mais importantes do estoque em
                um único ambiente, facilitando o acompanhamento e a tomada de
                decisões.
              </p>

              <Button
                asChild
                variant="outline"
                className="mt-7 rounded-full border-slate-300"
              >
                <Link href="/demo">
                  Explorar o sistema
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<Package />}
                title="Cadastro de materiais"
                text="Organize código, nome, categoria, unidade e quantidade."
              />

              <FeatureCard
                icon={<TrendingUp />}
                title="Movimentações"
                text="Registre entradas e saídas de materiais de forma simples."
              />

              <FeatureCard
                icon={<CircleAlert />}
                title="Alertas de estoque"
                text="Identifique materiais abaixo do estoque mínimo."
              />

              <FeatureCard
                icon={<BarChart3 />}
                title="Gráficos"
                text="Visualize os dados do estoque de forma rápida e intuitiva."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge className="rounded-full border border-[#7c2857]/20 bg-[#7c2857]/10 text-[#7c2857] hover:bg-[#7c2857]/10">
                CAPTAÇÃO DE LEADS
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Descubra como o Fluxora pode ajudar sua empresa
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-600">
                Preencha o formulário e conheça uma solução criada para
                facilitar o controle de materiais e melhorar a gestão do
                estoque.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c2857]/10 text-[#7c2857]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <span className="text-sm text-slate-600">
                    Demonstração da plataforma
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c2857]/10 text-[#7c2857]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <span className="text-sm text-slate-600">
                    Recursos para gestão de materiais
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c2857]/10 text-[#7c2857]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <span className="text-sm text-slate-600">
                    Informações organizadas em um só lugar
                  </span>
                </div>
              </div>
            </div>

            <Card className="border-slate-200 shadow-xl shadow-[#7c2857]/5">
              <CardHeader className="border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7c2857]/10 text-[#7c2857]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <CardTitle className="text-xl">
                      Solicite uma demonstração
                    </CardTitle>

                    <p className="mt-1 text-sm text-slate-500">
                      Conte um pouco sobre sua empresa.
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <form className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>

                    <Input
                      id="nome"
                      name="nome"
                      placeholder="Digite seu nome"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      E-mail corporativo
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seuemail@empresa.com"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>

                    <Input
                      id="empresa"
                      name="empresa"
                      placeholder="Nome da empresa"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interesse">
                      Área de interesse
                    </Label>

                    <Select>
                      <SelectTrigger id="interesse" className="h-11">
                        <SelectValue placeholder="Selecione uma área" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="estoque">
                          Gestão de estoque
                        </SelectItem>

                        <SelectItem value="materiais">
                          Gestão de materiais
                        </SelectItem>

                        <SelectItem value="producao">
                          Produção industrial
                        </SelectItem>

                        <SelectItem value="manutencao">
                          Manutenção
                        </SelectItem>

                        <SelectItem value="outros">
                          Outros
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">
                      Como podemos ajudar?
                    </Label>

                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Conte brevemente o que sua empresa procura..."
                      className="min-h-24 resize-none"
                    />
                  </div>

                  <Button
                    type="button"
                    className="h-11 w-full rounded-lg bg-[#7c2857] hover:bg-[#661f48]"
                  >
                    Solicitar demonstração
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-slate-400">
                    Formulário demonstrativo para apresentação do projeto.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#7c2857] px-8 py-14 text-white shadow-xl shadow-[#7c2857]/20 sm:px-14">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold tracking-widest text-white/70">
                  FLUXORA
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Pronto para ter mais controle do seu estoque?
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/75">
                  Conheça a demonstração e veja como uma gestão visual pode
                  simplificar sua operação.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-7 text-[#7c2857] hover:bg-slate-100"
              >
                <Link href="/demo">
                  Ver demonstração
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contato"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c2857] text-white">
                <Boxes className="h-4 w-4" />
              </div>

              <span className="text-xl font-bold text-[#7c2857]">
                FLUXORA
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Gestão inteligente de materiais para operações mais organizadas,
              eficientes e conectadas.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <Link
              href="#inicio"
              className="transition hover:text-[#7c2857]"
            >
              Início
            </Link>

            <Link
              href="#beneficios"
              className="transition hover:text-[#7c2857]"
            >
              Benefícios
            </Link>

            <Link
              href="#recursos"
              className="transition hover:text-[#7c2857]"
            >
              Recursos
            </Link>

            <Link
              href="#contato"
              className="transition hover:text-[#7c2857]"
            >
              Contato
            </Link>

            <Link
              href="/demo"
              className="flex items-center gap-1 transition hover:text-[#7c2857]"
            >
              Demonstração
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">
          © 2026 Fluxora. Gestão inteligente de materiais.
        </div>
      </footer>
    </main>
  )
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <div className="absolute -inset-6 rounded-full bg-[#7c2857]/10 blur-3xl" />

      <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <div className="flex h-9 items-center gap-1.5 border-b bg-white px-3">
            <div className="h-2 w-2 rounded-full bg-slate-300" />
            <div className="h-2 w-2 rounded-full bg-slate-300" />
            <div className="h-2 w-2 rounded-full bg-slate-300" />

            <div className="ml-2 flex h-5 flex-1 items-center rounded bg-slate-100 px-2 text-[8px] text-slate-400">
              fluxora.com/demo
            </div>
          </div>

          <div className="flex">
            <aside className="hidden w-32 border-r bg-white p-2.5 sm:block">
              <div className="mb-5 flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#7c2857] text-white">
                  <Boxes className="h-3 w-3" />
                </div>

                <span className="text-[9px] font-bold text-[#7c2857]">
                  FLUXORA
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 rounded-md bg-[#7c2857]/10 px-2 py-1.5 text-[8px] font-medium text-[#7c2857]">
                  <BarChart3 className="h-3 w-3" />
                  Dashboard
                </div>

                <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[8px] text-slate-500">
                  <Package className="h-3 w-3" />
                  Materiais
                </div>

                <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[8px] text-slate-500">
                  <Warehouse className="h-3 w-3" />
                  Estoque
                </div>

                <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[8px] text-slate-500">
                  <ClipboardList className="h-3 w-3" />
                  Movimentações
                </div>
              </div>
            </aside>

            <div className="min-w-0 flex-1 p-3 sm:p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[7px] font-medium text-slate-400">
                    VISÃO GERAL
                  </p>

                  <h3 className="mt-0.5 text-sm font-bold text-slate-900">
                    Dashboard
                  </h3>
                </div>

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7c2857]/10 text-[#7c2857]">
                  <Search className="h-3 w-3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <PreviewMetric title="Materiais" value="16" />
                <PreviewMetric title="Normal" value="10" />
                <PreviewMetric title="Estoque baixo" value="4" />
                <PreviewMetric title="Sem estoque" value="2" />
              </div>

              <div className="mt-2 grid gap-2 sm:grid-cols-[1.4fr_0.8fr]">
                <div className="rounded-lg border bg-white p-2.5">
                  <div className="mb-2">
                    <p className="text-[8px] font-semibold">
                      Movimentação de estoque
                    </p>

                    <p className="text-[6px] text-slate-400">
                      Entradas e saídas
                    </p>
                  </div>

                  <div className="relative h-24">
                    <div className="absolute inset-0 flex flex-col justify-between">
                      <div className="border-t border-dashed border-slate-100" />
                      <div className="border-t border-dashed border-slate-100" />
                      <div className="border-t border-dashed border-slate-100" />
                      <div className="border-t border-dashed border-slate-100" />
                    </div>

                    <svg
                      viewBox="0 0 500 150"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="fluxoraPreview"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#7c2857"
                            stopOpacity="0.2"
                          />

                          <stop
                            offset="100%"
                            stopColor="#7c2857"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d={`M 0 ${150 - chartPoints[0]} ${chartPoints
                          .map(
                            (point, index) =>
                              `L ${
                                (index / (chartPoints.length - 1)) * 500
                              } ${150 - point}`
                          )
                          .join(
                            " "
                          )} L 500 150 L 0 150 Z`}
                        fill="url(#fluxoraPreview)"
                      />

                      <path
                        d={`M 0 ${150 - chartPoints[0]} ${chartPoints
                          .map(
                            (point, index) =>
                              `L ${
                                (index / (chartPoints.length - 1)) * 500
                              } ${150 - point}`
                          )
                          .join(" ")}`}
                        fill="none"
                        stroke="#7c2857"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-2.5">
                  <p className="text-[8px] font-semibold">
                    Situação dos estoques
                  </p>

                  <div className="mt-3 flex justify-center">
                    <div className="relative h-20 w-20">
                      <div
                        className="h-full w-full rounded-full"
                        style={{
                          background:
                            "conic-gradient(#7c2857 0deg 225deg, #c02675 225deg 315deg, #e91e63 315deg 360deg)",
                        }}
                      />

                      <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-bold">16</span>
                        <span className="text-[6px] text-slate-400">
                          materiais
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 space-y-1 text-[6px]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Normal</span>
                      <span className="font-semibold">10</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Baixo</span>
                      <span className="font-semibold">4</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Sem estoque</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-lg border bg-white p-2.5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[8px] font-semibold">
                    Materiais por categoria
                  </p>

                  <BarChart3 className="h-3 w-3 text-[#7c2857]" />
                </div>

                <div className="flex h-20 items-end gap-2">
                  {categoryData.map((item) => (
                    <div
                      key={item.name}
                      className="flex h-full flex-1 flex-col items-center justify-end gap-1"
                    >
                      <div
                        className="w-full max-w-[18px] rounded-t bg-[#7c2857]"
                        style={{
                          height: `${Math.max(item.value * 15, 10)}%`,
                        }}
                      />

                      <span className="w-full truncate text-center text-[5px] text-slate-400">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-2 overflow-hidden rounded-lg border bg-white">
                <div className="border-b px-2.5 py-1.5">
                  <p className="text-[8px] font-semibold">
                    Materiais cadastrados
                  </p>
                </div>

                {materials.map((material) => (
                  <div
                    key={material.code}
                    className="grid grid-cols-[0.8fr_1.5fr_0.7fr_0.8fr] items-center gap-2 border-b px-2.5 py-1.5 text-[6px] last:border-0"
                  >
                    <span className="text-slate-500">
                      {material.code}
                    </span>

                    <span className="truncate font-medium">
                      {material.name}
                    </span>

                    <span className="text-slate-500">
                      {material.quantity}
                    </span>

                    <span
                      className={`rounded-full px-1 py-0.5 text-center ${
                        material.status === "Normal"
                          ? "bg-[#7c2857]/10 text-[#7c2857]"
                          : material.status === "Estoque baixo"
                          ? "bg-[#c02675]/10 text-[#c02675]"
                          : "bg-[#e91e63]/10 text-[#e91e63]"
                      }`}
                    >
                      {material.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PreviewMetric({ title, value }) {
  return (
    <div className="rounded-lg border bg-white p-2">
      <p className="text-[6px] text-slate-400">{title}</p>
      <p className="mt-0.5 text-sm font-bold text-slate-900">{value}</p>
    </div>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <Card className="border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-7">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c2857]/10 text-[#7c2857]">
          {icon}
        </div>

        <h3 className="mt-6 text-lg font-semibold text-slate-950">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <Card className="border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardHeader>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7c2857]/10 text-[#7c2857]">
          {icon}
        </div>

        <CardTitle className="pt-2 text-base">{title}</CardTitle>
      </CardHeader>

      <CardContent className="-mt-2 text-sm leading-6 text-slate-500">
        {text}
      </CardContent>
    </Card>
  )
}