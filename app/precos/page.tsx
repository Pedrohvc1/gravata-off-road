export default function PrecosPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Preços</h1>
      <p className="text-slate-300">Planos simples e transparentes.</p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { nome: "Básico", preco: "R$ 49/mês", desc: "Para começar" },
          { nome: "Pro", preco: "R$ 99/mês", desc: "Para crescer" },
          { nome: "Empresa", preco: "R$ 199/mês", desc: "Para escalar" },
        ].map((p) => (
          <div key={p.nome} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <h2 className="text-xl font-semibold">{p.nome}</h2>
            <p className="text-slate-300">{p.desc}</p>
            <p className="mt-2 text-2xl font-bold">{p.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
