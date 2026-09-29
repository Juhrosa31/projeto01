"use client";

import * as React from "react";
import Link from "next/link";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialMaterials = [
  {
    id: 1,
    codigo: "MP-001",
    nome: "Chapa de aço",
    categoria: "Metais",
    unidade: "kg",
    quantidade: 150,
    minimo: 200,
  },
  {
    id: 2,
    codigo: "MP-002",
    nome: "Bobina de alumínio",
    categoria: "Metais",
    unidade: "kg",
    quantidade: 320,
    minimo: 200,
  },
  {
    id: 3,
    codigo: "MP-003",
    nome: "Tubo de aço",
    categoria: "Metais",
    unidade: "m",
    quantidade: 0,
    minimo: 100,
  },
  {
    id: 4,
    codigo: "MP-004",
    nome: "Perfil metálico",
    categoria: "Metais",
    unidade: "m",
    quantidade: 180,
    minimo: 120,
  },
  {
    id: 5,
    codigo: "PL-001",
    nome: "Resina plástica",
    categoria: "Plásticos",
    unidade: "kg",
    quantidade: 85,
    minimo: 100,
  },
  {
    id: 6,
    codigo: "PL-002",
    nome: "Polipropileno",
    categoria: "Plásticos",
    unidade: "kg",
    quantidade: 240,
    minimo: 150,
  },
  {
    id: 7,
    codigo: "PL-003",
    nome: "PVC industrial",
    categoria: "Plásticos",
    unidade: "kg",
    quantidade: 190,
    minimo: 120,
  },
  {
    id: 8,
    codigo: "EL-001",
    nome: "Cabo elétrico",
    categoria: "Eletrônicos",
    unidade: "m",
    quantidade: 500,
    minimo: 300,
  },
  {
    id: 9,
    codigo: "EL-002",
    nome: "Conector industrial",
    categoria: "Eletrônicos",
    unidade: "un",
    quantidade: 0,
    minimo: 50,
  },
  {
    id: 10,
    codigo: "EL-003",
    nome: "Sensor de temperatura",
    categoria: "Eletrônicos",
    unidade: "un",
    quantidade: 75,
    minimo: 100,
  },
  {
    id: 11,
    codigo: "QM-001",
    nome: "Óleo industrial",
    categoria: "Químicos",
    unidade: "L",
    quantidade: 45,
    minimo: 80,
  },
  {
    id: 12,
    codigo: "QM-002",
    nome: "Fluido hidráulico",
    categoria: "Químicos",
    unidade: "L",
    quantidade: 160,
    minimo: 100,
  },
  {
    id: 13,
    codigo: "EM-001",
    nome: "Embalagem plástica",
    categoria: "Embalagens",
    unidade: "un",
    quantidade: 450,
    minimo: 250,
  },
  {
    id: 14,
    codigo: "FE-001",
    nome: "Parafuso industrial",
    categoria: "Fixadores",
    unidade: "un",
    quantidade: 1200,
    minimo: 800,
  },
  {
    id: 15,
    codigo: "FE-002",
    nome: "Porca sextavada",
    categoria: "Fixadores",
    unidade: "un",
    quantidade: 700,
    minimo: 600,
  },
  {
    id: 16,
    codigo: "LU-001",
    nome: "Lubrificante",
    categoria: "Lubrificantes",
    unidade: "L",
    quantidade: 90,
    minimo: 100,
  },
];

const categorias = [
  "Metais",
  "Plásticos",
  "Eletrônicos",
  "Químicos",
  "Embalagens",
  "Fixadores",
  "Lubrificantes",
];

const chartData = [
  { data: "01 Mai", entradas: 120, saidas: 80 },
  { data: "05 Mai", entradas: 180, saidas: 110 },
  { data: "10 Mai", entradas: 145, saidas: 130 },
  { data: "15 Mai", entradas: 230, saidas: 160 },
  { data: "20 Mai", entradas: 190, saidas: 145 },
  { data: "25 Mai", entradas: 280, saidas: 210 },
  { data: "30 Mai", entradas: 245, saidas: 180 },
  { data: "01 Jun", entradas: 260, saidas: 190 },
  { data: "05 Jun", entradas: 310, saidas: 230 },
  { data: "10 Jun", entradas: 275, saidas: 250 },
  { data: "15 Jun", entradas: 350, saidas: 270 },
  { data: "20 Jun", entradas: 320, saidas: 240 },
  { data: "25 Jun", entradas: 390, saidas: 310 },
  { data: "30 Jun", entradas: 360, saidas: 280 },
];

const chartConfig = {
  entradas: {
    label: "Entradas",
    color: "#7c2857",
  },
  saidas: {
    label: "Saídas",
    color: "#e91e63",
  },
};

function getSituacao(quantidade, minimo) {
  if (quantidade === 0) return "Sem estoque";
  if (quantidade < minimo) return "Estoque baixo";
  return "Normal";
}

function getSituacaoClass(situacao) {
  if (situacao === "Normal") {
    return "border-[#7c2857]/20 bg-[#7c2857]/10 text-[#7c2857]";
  }

  if (situacao === "Estoque baixo") {
    return "border-[#c02675]/20 bg-[#c02675]/10 text-[#c02675]";
  }

  return "border-[#e91e63]/20 bg-[#e91e63]/10 text-[#e91e63]";
}

export default function DemoPage() {
  const [materials, setMaterials] = React.useState(initialMaterials);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("todas");
  const [statusFilter, setStatusFilter] = React.useState("todos");

  const [newMaterialOpen, setNewMaterialOpen] = React.useState(false);
  const [movementOpen, setMovementOpen] = React.useState(false);

  const [movementMaterial, setMovementMaterial] = React.useState(null);
  const [movementType, setMovementType] = React.useState("entrada");
  const [movementQuantity, setMovementQuantity] = React.useState("");

  const [newMaterial, setNewMaterial] = React.useState({
    codigo: "",
    nome: "",
    categoria: "Metais",
    unidade: "kg",
    quantidade: "",
    minimo: "",
  });

  const [formError, setFormError] = React.useState("");

  const filteredMaterials = React.useMemo(() => {
    return materials.filter((material) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        material.nome.toLowerCase().includes(searchValue) ||
        material.codigo.toLowerCase().includes(searchValue);

      const matchesCategory =
        categoryFilter === "todas" ||
        material.categoria === categoryFilter;

      const situacao = getSituacao(
        material.quantidade,
        material.minimo
      );

      const matchesStatus =
        statusFilter === "todos" || situacao === statusFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [materials, search, categoryFilter, statusFilter]);

  const totalMaterials = materials.length;

  const normalCount = materials.filter(
    (material) =>
      getSituacao(
        material.quantidade,
        material.minimo
      ) === "Normal"
  ).length;

  const lowCount = materials.filter(
    (material) =>
      getSituacao(
        material.quantidade,
        material.minimo
      ) === "Estoque baixo"
  ).length;

  const emptyCount = materials.filter(
    (material) =>
      getSituacao(
        material.quantidade,
        material.minimo
      ) === "Sem estoque"
  ).length;
const categoryChartData = React.useMemo(() => {
  return categorias.map((categoria) => ({
    categoria,
    quantidade: materials.filter(
      (material) => material.categoria === categoria
    ).length,
  }));
}, [materials]);

  const statusChartData = [
    {
      status: "Normal",
      quantidade: normalCount,
      fill: "#7c2857",
    },
    {
      status: "Estoque baixo",
      quantidade: lowCount,
      fill: "#c02675",
    },
    {
      status: "Sem estoque",
      quantidade: emptyCount,
      fill: "#e91e63",
    },
  ];

  function clearFilters() {
    setSearch("");
    setCategoryFilter("todas");
    setStatusFilter("todos");
  }

  function handleNewMaterialChange(field, value) {
    setNewMaterial((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function createMaterial() {
    setFormError("");

    const quantidade = Number(newMaterial.quantidade);
    const minimo = Number(newMaterial.minimo);

    if (
      !newMaterial.codigo.trim() ||
      !newMaterial.nome.trim() ||
      !newMaterial.categoria ||
      !newMaterial.unidade
    ) {
      setFormError(
        "Preencha todos os campos obrigatórios."
      );
      return;
    }

    if (Number.isNaN(quantidade) || quantidade < 0) {
      setFormError(
        "A quantidade não pode ser negativa."
      );
      return;
    }

    if (Number.isNaN(minimo) || minimo < 0) {
      setFormError(
        "O estoque mínimo não pode ser negativo."
      );
      return;
    }

    const codeExists = materials.some(
      (material) =>
        material.codigo.toLowerCase() ===
        newMaterial.codigo.toLowerCase()
    );

    if (codeExists) {
      setFormError(
        "Já existe um material com esse código."
      );
      return;
    }

    const material = {
      id: Date.now(),
      codigo: newMaterial.codigo.toUpperCase(),
      nome: newMaterial.nome,
      categoria: newMaterial.categoria,
      unidade: newMaterial.unidade,
      quantidade,
      minimo,
    };

    setMaterials((current) => [
      ...current,
      material,
    ]);

    setNewMaterial({
      codigo: "",
      nome: "",
      categoria: "Metais",
      unidade: "kg",
      quantidade: "",
      minimo: "",
    });

    setNewMaterialOpen(false);
  }

  function openMovement(material) {
    setMovementMaterial(material);
    setMovementType("entrada");
    setMovementQuantity("");
    setFormError("");
    setMovementOpen(true);
  }

  function registerMovement() {
    setFormError("");

    const quantity = Number(movementQuantity);

    if (!movementQuantity || Number.isNaN(quantity)) {
      setFormError(
        "Informe uma quantidade válida."
      );
      return;
    }

    if (quantity <= 0) {
      setFormError(
        "A movimentação precisa ser maior que zero."
      );
      return;
    }

    if (
      movementType === "saida" &&
      quantity > movementMaterial.quantidade
    ) {
      setFormError(
        "A saída não pode ser maior que o saldo disponível."
      );
      return;
    }

    setMaterials((current) =>
      current.map((material) => {
        if (
          material.id !== movementMaterial.id
        ) {
          return material;
        }

        const updatedQuantity =
          movementType === "entrada"
            ? material.quantidade + quantity
            : material.quantidade - quantity;

        return {
          ...material,
          quantidade: updatedQuantity,
        };
      })
    );

    setMovementOpen(false);
    setMovementMaterial(null);
    setMovementQuantity("");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          <div className="border-b border-slate-200 px-6 py-6">
            <Link
              href="/"
              className="flex flex-col"
            >
              <span className="text-2xl font-bold tracking-tight text-[#7c2857]">
                FLUXORA
              </span>

              <span className="text-xs text-slate-500">
                Gestão inteligente de materiais
              </span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            <SidebarItem
              active
              href="/demo"
            >
              Visão geral
            </SidebarItem>

            <SidebarItem href="#materiais">
              Materiais
            </SidebarItem>

            <SidebarItem href="#estoque">
              Estoque
            </SidebarItem>

            <SidebarItem href="#alertas">
              Alertas
            </SidebarItem>

            <SidebarItem href="#relatorios">
              Relatórios
            </SidebarItem>
          </nav>

          <div className="border-t border-slate-200 p-4">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-[#7c2857]"
            >
              ← Voltar para o site
            </Link>
          </div>
        </div>
      </aside>

      <main className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-20 items-center justify-between gap-4 px-5 sm:px-8">
            <div>
              <p className="text-sm text-slate-500">
                Dashboard
              </p>

              <h1 className="text-xl font-bold text-slate-900">
                Visão geral
              </h1>
            </div>

            <Button
              onClick={() =>
                setNewMaterialOpen(true)
              }
              className="rounded-xl bg-[#7c2857] hover:bg-[#681f49]"
            >
              + Novo material
            </Button>
          </div>
        </header>

        <div className="space-y-8 p-5 sm:p-8">
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Olá, seja bem-vindo!
              </h2>

              <p className="mt-1 text-slate-500">
                Acompanhe o estoque e os materiais cadastrados.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                title="Materiais cadastrados"
                value={totalMaterials}
                description="Total no sistema"
                icon="▦"
              />

              <MetricCard
                title="Estoque normal"
                value={normalCount}
                description="Dentro do mínimo"
                icon="✓"
                accent="green"
              />

              <MetricCard
                title="Estoque baixo"
                value={lowCount}
                description="Precisam de atenção"
                icon="!"
                accent="pink"
              />

              <MetricCard
                title="Sem estoque"
                value={emptyCount}
                description="Precisam de reposição"
                icon="×"
                accent="red"
              />
            </div>
          </section>

          <section
            className="grid gap-6 xl:grid-cols-2"
            id="estoque"
          >
            <Card className="overflow-hidden border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">
                  Entradas e saídas
                </CardTitle>

                <p className="text-sm text-slate-500">
                  Movimentação do estoque
                </p>
              </CardHeader>

              <CardContent>
                <ChartContainer
                  config={chartConfig}
                  className="h-[310px] w-full"
                >
                  <AreaChart
                    data={chartData}
                    margin={{
                      left: 0,
                      right: 10,
                      top: 10,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="fillEntradas"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#7c2857"
                          stopOpacity={0.3}
                        />

                        <stop
                          offset="95%"
                          stopColor="#7c2857"
                          stopOpacity={0}
                        />
                      </linearGradient>

                      <linearGradient
                        id="fillSaidas"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#e91e63"
                          stopOpacity={0.25}
                        />

                        <stop
                          offset="95%"
                          stopColor="#e91e63"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="4 4"
                    />

                    <XAxis
                      dataKey="data"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />

                    <ChartTooltip
                      cursor={{
                        stroke: "#7c2857",
                        strokeWidth: 1,
                        strokeDasharray: "4 4",
                      }}
                      content={
                        <ChartTooltipContent />
                      }
                    />

                    <Area
                      dataKey="saidas"
                      type="monotone"
                      fill="url(#fillSaidas)"
                      stroke="#e91e63"
                      strokeWidth={2.5}
                    />

                    <Area
                      dataKey="entradas"
                      type="monotone"
                      fill="url(#fillEntradas)"
                      stroke="#7c2857"
                      strokeWidth={2.5}
                    />

                    <ChartLegend
                      content={
                        <ChartLegendContent />
                      }
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">
                  Distribuição do estoque
                </CardTitle>

                <p className="text-sm text-slate-500">
                  Situação dos materiais cadastrados
                </p>
              </CardHeader>

              <CardContent>
                <ChartContainer
                  config={{
                    normal: {
                      label: "Normal",
                      color: "#7c2857",
                    },
                    baixo: {
                      label: "Estoque baixo",
                      color: "#c02675",
                    },
                    semEstoque: {
                      label: "Sem estoque",
                      color: "#e91e63",
                    },
                  }}
                  className="h-[310px] w-full"
                >
                  <PieChart>
                    <ChartTooltip
                      content={
                        <ChartTooltipContent hideLabel />
                      }
                    />

                    <Pie
                      data={statusChartData}
                      dataKey="quantidade"
                      nameKey="status"
                      innerRadius={72}
                      outerRadius={105}
                      paddingAngle={5}
                      strokeWidth={3}
                      stroke="#ffffff"
                    >
                      {statusChartData.map(
                        (entry) => (
                          <Cell
                            key={entry.status}
                            fill={entry.fill}
                          />
                        )
                      )}
                    </Pie>

                    <ChartLegend
                      content={
                        <ChartLegendContent />
                      }
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </section>

          <section>
  <Card className="overflow-hidden border-slate-200 shadow-sm">
    <CardHeader>
      <CardTitle className="text-lg">
        Materiais por categoria
      </CardTitle>

      <p className="mt-1 text-sm text-slate-500">
        Quantidade de materiais cadastrados por categoria
      </p>
    </CardHeader>

    <CardContent>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[850px]">
          <ChartContainer
            config={{
              quantidade: {
                label: "Materiais",
                color: "#7c2857",
              },
            }}
            className="h-[340px] w-full"
          >
            <BarChart
              data={categoryChartData}
              barCategoryGap="12%"
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 15,
              }}
            >
              <CartesianGrid
                vertical={false}
                strokeDasharray="4 4"
              />

              <XAxis
                dataKey="categoria"
                tickLine={false}
                axisLine={false}
                tickMargin={12}
                interval={0}
                angle={-15}
                textAnchor="end"
                height={70}
              />

              <YAxis
                allowDecimals={false}
                tickLine={false}
                axisLine={false}
                width={30}
              />

              <ChartTooltip
                cursor={{
                  fill: "rgba(124, 40, 87, 0.06)",
                }}
                content={
                  <ChartTooltipContent />
                }
              />

              <Bar
                dataKey="quantidade"
                fill="#7c2857"
                radius={[8, 8, 3, 3]}
                barSize={32}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </CardContent>
  </Card>
</section>

          <section id="materiais">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">
                  Materiais cadastrados
                </CardTitle>

                <p className="mt-1 text-sm text-slate-500">
                  Pesquise e filtre os materiais do estoque.
                </p>

                <div className="grid gap-3 pt-4 md:grid-cols-2 xl:grid-cols-[1fr_200px_200px_auto]">
                  <Input
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                    placeholder="Buscar por nome ou código..."
                    className="rounded-xl"
                  />

                  <Select
                    value={categoryFilter}
                    onValueChange={
                      setCategoryFilter
                    }
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="todas">
                        Todas as categorias
                      </SelectItem>

                      {categorias.map(
                        (categoria) => (
                          <SelectItem
                            key={categoria}
                            value={categoria}
                          >
                            {categoria}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>

                  <Select
                    value={statusFilter}
                    onValueChange={
                      setStatusFilter
                    }
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="todos">
                        Todas as situações
                      </SelectItem>

                      <SelectItem value="Normal">
                        Normal
                      </SelectItem>

                      <SelectItem value="Estoque baixo">
                        Estoque baixo
                      </SelectItem>

                      <SelectItem value="Sem estoque">
                        Sem estoque
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="rounded-xl"
                  >
                    Limpar filtros
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[950px]">
                    <thead>
                      <tr className="border-b bg-slate-50">
                        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Código
                        </th>

                        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Material
                        </th>

                        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Categoria
                        </th>

                        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Unidade
                        </th>

                        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Quantidade
                        </th>

                        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Mínimo
                        </th>

                        <th className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Situação
                        </th>

                        <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Ação
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredMaterials.map(
                        (material) => {
                          const situacao =
                            getSituacao(
                              material.quantidade,
                              material.minimo
                            );

                          return (
                            <tr
                              key={material.id}
                              className="border-b last:border-0 hover:bg-slate-50"
                            >
                              <td className="px-4 py-4 font-semibold text-[#7c2857]">
                                {material.codigo}
                              </td>

                              <td className="px-4 py-4 font-medium text-slate-900">
                                {material.nome}
                              </td>

                              <td className="px-4 py-4 text-slate-600">
                                {material.categoria}
                              </td>

                              <td className="px-4 py-4 text-slate-600">
                                {material.unidade}
                              </td>

                              <td className="px-4 py-4 font-semibold text-slate-900">
                                {material.quantidade}
                              </td>

                              <td className="px-4 py-4 text-slate-600">
                                {material.minimo}
                              </td>

                              <td className="px-4 py-4">
                                <Badge
                                  variant="outline"
                                  className={getSituacaoClass(
                                    situacao
                                  )}
                                >
                                  {situacao}
                                </Badge>
                              </td>

                              <td className="px-4 py-4 text-right">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    openMovement(
                                      material
                                    )
                                  }
                                  className="rounded-lg"
                                >
                                  Movimentar
                                </Button>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>

                  {filteredMaterials.length ===
                    0 && (
                    <div className="px-6 py-12 text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#7c2857]/10 text-xl text-[#7c2857]">
                        🔍
                      </div>

                      <h3 className="font-semibold text-slate-900">
                        Nenhum material encontrado
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Tente alterar a busca ou limpar os filtros.
                      </p>

                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="mt-4 rounded-xl"
                      >
                        Limpar filtros
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          <section
            id="alertas"
            className="grid gap-6 md:grid-cols-3"
          >
            <InfoCard
              title="Estoque baixo"
              value={lowCount}
              description="Materiais abaixo do estoque mínimo."
              icon="!"
            />

            <InfoCard
              title="Sem estoque"
              value={emptyCount}
              description="Materiais que precisam de reposição."
              icon="×"
            />

            <InfoCard
              title="Itens em situação normal"
              value={normalCount}
              description="Materiais com quantidade adequada."
              icon="✓"
            />
          </section>

          <section id="relatorios">
            <Card className="overflow-hidden border-0 bg-gradient-to-r from-[#7c2857] to-[#c02675] text-white shadow-lg">
              <CardContent className="flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
                <div>
                  <p className="text-sm font-medium text-white/70">
                    FLUXORA
                  </p>

                  <h2 className="mt-1 text-2xl font-bold">
                    Controle seu estoque com mais inteligência.
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm text-white/80">
                    Acompanhe materiais, movimentações e alertas
                    em um único lugar.
                  </p>
                </div>

                <Button
                  variant="secondary"
                  onClick={() =>
                    setNewMaterialOpen(true)
                  }
                  className="rounded-xl bg-white text-[#7c2857] hover:bg-white/90"
                >
                  Adicionar material
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Dialog
        open={newMaterialOpen}
        onOpenChange={setNewMaterialOpen}
      >
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              Cadastrar novo material
            </DialogTitle>

            <DialogDescription>
              Preencha os dados para adicionar um novo material
              ao estoque.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-5 py-4">
            <div className="grid gap-2">
              <Label htmlFor="codigo">
                Código
              </Label>

              <Input
                id="codigo"
                value={newMaterial.codigo}
                onChange={(event) =>
                  handleNewMaterialChange(
                    "codigo",
                    event.target.value
                  )
                }
                placeholder="Ex.: MP-004"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="nome">
                Material
              </Label>

              <Input
                id="nome"
                value={newMaterial.nome}
                onChange={(event) =>
                  handleNewMaterialChange(
                    "nome",
                    event.target.value
                  )
                }
                placeholder="Ex.: Chapa de aço"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>
                  Categoria
                </Label>

                <Select
                  value={newMaterial.categoria}
                  onValueChange={(value) =>
                    handleNewMaterialChange(
                      "categoria",
                      value
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    {categorias.map(
                      (categoria) => (
                        <SelectItem
                          key={categoria}
                          value={categoria}
                        >
                          {categoria}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label>
                  Unidade
                </Label>

                <Select
                  value={newMaterial.unidade}
                  onValueChange={(value) =>
                    handleNewMaterialChange(
                      "unidade",
                      value
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="kg">
                      kg
                    </SelectItem>

                    <SelectItem value="un">
                      un
                    </SelectItem>

                    <SelectItem value="m">
                      m
                    </SelectItem>

                    <SelectItem value="L">
                      L
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="quantidade">
                  Quantidade disponível
                </Label>

                <Input
                  id="quantidade"
                  type="number"
                  min="0"
                  value={newMaterial.quantidade}
                  onChange={(event) =>
                    handleNewMaterialChange(
                      "quantidade",
                      event.target.value
                    )
                  }
                  placeholder="0"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="minimo">
                  Estoque mínimo
                </Label>

                <Input
                  id="minimo"
                  type="number"
                  min="0"
                  value={newMaterial.minimo}
                  onChange={(event) =>
                    handleNewMaterialChange(
                      "minimo",
                      event.target.value
                    )
                  }
                  placeholder="0"
                />
              </div>
            </div>

            {formError && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {formError}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() =>
                setNewMaterialOpen(false)
              }
            >
              Cancelar
            </Button>

            <Button
              onClick={createMaterial}
              className="bg-[#7c2857] hover:bg-[#681f49]"
            >
              Cadastrar material
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={movementOpen}
        onOpenChange={setMovementOpen}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              Movimentar estoque
            </DialogTitle>

            <DialogDescription>
              {movementMaterial
                ? `${movementMaterial.nome} — saldo atual: ${movementMaterial.quantidade} ${movementMaterial.unidade}`
                : "Registre uma entrada ou saída."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-5 py-4">
            <div className="grid gap-2">
              <Label>
                Tipo de movimentação
              </Label>

              <Select
                value={movementType}
                onValueChange={setMovementType}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="entrada">
                    Entrada de estoque
                  </SelectItem>

                  <SelectItem value="saida">
                    Saída de estoque
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="movimentacao">
                Quantidade
              </Label>

              <Input
                id="movimentacao"
                type="number"
                min="1"
                value={movementQuantity}
                onChange={(event) =>
                  setMovementQuantity(
                    event.target.value
                  )
                }
                placeholder="Digite a quantidade"
              />
            </div>

            {movementMaterial &&
              movementType === "saida" && (
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">
                    Saldo disponível
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-900">
                    {movementMaterial.quantidade}{" "}
                    {movementMaterial.unidade}
                  </p>
                </div>
              )}

            {formError && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {formError}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() =>
                setMovementOpen(false)
              }
            >
              Cancelar
            </Button>

            <Button
              onClick={registerMovement}
              className="bg-[#7c2857] hover:bg-[#681f49]"
            >
              Confirmar movimentação
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SidebarItem({
  children,
  active,
  href,
}) {
  return (
    <Link
      href={href}
      className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-[#7c2857] text-white"
          : "text-slate-600 hover:bg-slate-100 hover:text-[#7c2857]"
      }`}
    >
      {children}
    </Link>
  );
}

function MetricCard({
  title,
  value,
  description,
  icon,
  accent = "purple",
}) {
  const styles = {
    purple:
      "bg-[#7c2857]/10 text-[#7c2857]",
    green:
      "bg-[#7c2857]/10 text-[#7c2857]",
    pink:
      "bg-[#c02675]/10 text-[#c02675]",
    red:
      "bg-[#e91e63]/10 text-[#e91e63]",
  };

  return (
    <Card className="border-slate-200 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">
              {title}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {value}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {description}
            </p>
          </div>

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold ${styles[accent]}`}
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoCard({
  title,
  value,
  description,
  icon,
}) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7c2857]/10 font-bold text-[#7c2857]">
          {icon}
        </div>

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="text-2xl font-bold text-slate-900">
            {value}
          </p>

          <p className="text-xs text-slate-500">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}