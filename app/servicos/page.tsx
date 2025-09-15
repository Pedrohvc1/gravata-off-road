import Image from "next/image";
import DatePicker from "./DatePicker";
import { prisma } from "@/lib/prisma";

type PageProps = { searchParams?: { data?: string } };

function parseDateParam(s?: string): { start: Date; end: Date; labelISO: string } {
  const now = new Date();
  const base = s ? new Date(s) : now;
  const start = new Date(base.getFullYear(), base.getMonth(), base.getDate(), 0, 0, 0, 0);
  const end = new Date(base.getFullYear(), base.getMonth(), base.getDate() + 1, 0, 0, 0, 0);
  const labelISO = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, "0")}-${String(start.getDate()).padStart(2, "0")}`;
  return { start, end, labelISO };
}

function formatPriceBRLFromCents(cents: number) {
  return (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default async function ServicosPage({ searchParams }: PageProps) {
  const { start, end, labelISO } = parseDateParam(searchParams?.data);

  const passeios = await prisma.passeio.findMany({
    where: { ativo: true },
    include: {
      imagens: { where: { principal: true }, take: 1 },
      disponibilidades: { where: { data: { gte: start, lt: end } }, take: 1 },
    },
    orderBy: { nome: "asc" },
  });

  const items = passeios.map((p) => {
    const disp = p.disponibilidades[0];
    const temLinha = !!disp;
    const temVagas = disp ? disp.status === "ABERTO" && disp.capacidade - disp.reservados > 0 : false;
    const disponivel = temLinha && temVagas;
    const resumo = temLinha
      ? disp.status === "FECHADO"
        ? "Fechado neste dia"
        : `${disp.capacidade - disp.reservados} vagas`
      : "Sem disponibilidade cadastrada";
    return {
      id: p.id,
      nome: p.nome,
      descricao: p.descricao,
      preco: formatPriceBRLFromCents(p.precoCentavos),
      duracaoMin: p.duracaoMin,
      disponivel,
      resumo,
      img: p.imagens[0]?.url,
    };
  });

  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Passeios</h1>
      <p className="text-slate-300">Escolha a data para ver disponibilidade dos passeios.</p>
      <DatePicker />
      <p className="text-sm text-slate-400">Data selecionada: {labelISO}</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.id}
            className={`rounded-xl border border-slate-800 bg-slate-900/50 p-3 ${it.disponivel ? "" : "opacity-60 grayscale"}`}
          >
            {it.img ? (
              <div className="relative mb-3 h-40 overflow-hidden rounded-lg border border-slate-800">
                <Image src={it.img} alt={it.nome} fill className="object-cover" />
              </div>
            ) : null}
            <h2 className="text-lg font-semibold">{it.nome}</h2>
            <p className="text-slate-300">{it.descricao}</p>
            <p className="mt-1 text-sm text-slate-400">
              <strong>{it.preco}</strong>
              {it.duracaoMin ? ` • ${it.duracaoMin} min` : null}
            </p>
            <p className="text-sm text-slate-400">{it.resumo}</p>
            <div className="mt-3">
              <a
                href={it.disponivel ? `/contato?passeio=${encodeURIComponent(it.nome)}` : "#"}
                aria-disabled={!it.disponivel}
                onClick={(e) => { if (!it.disponivel) e.preventDefault(); }}
                className={`inline-block rounded-md px-4 py-2 font-medium ${
                  it.disponivel
                    ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                    : "cursor-not-allowed border border-slate-700 text-slate-300"
                }`}>
                {it.disponivel ? "Reservar" : "Indisponível"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
