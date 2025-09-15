import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-8">
      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-8">
        <h1 className="text-3xl font-bold">Aventura de Quadriciclo</h1>
        <p className="mt-2 text-slate-300">
          Trilhas incríveis para todos os níveis. Veja disponibilidade por data e faça sua reserva.
        </p>
        <div className="mt-4 flex gap-3">
          <Link href="/servicos" className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-900 hover:bg-emerald-400">
            Ver passeios
          </Link>
          <Link href="/contato" className="rounded-lg border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800">
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  );
}
