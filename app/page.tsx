import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-slate-100">
          Aventuras off-road em <span className="text-blue-400">Gravataí</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Viva a emoção dos passeios de quadriciclo e descubra trilhas incríveis 
          com segurança e diversão garantida.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/servicos"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Passeios
          </Link>
          <Link
            href="/contato"
            className="border border-slate-600 hover:border-slate-500 text-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="text-4xl mb-4">🏍️</div>
          <h3 className="text-xl font-semibold mb-2">Quadriciclos Modernos</h3>
          <p className="text-slate-300">
            Equipamentos de última geração com manutenção regular e segurança garantida.
          </p>
        </div>
        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="text-4xl mb-4">🌲</div>
          <h3 className="text-xl font-semibold mb-2">Trilhas Exclusivas</h3>
          <p className="text-slate-300">
            Rotas cuidadosamente selecionadas através da natureza preservada da região.
          </p>
        </div>
        <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm">
          <div className="text-4xl mb-4">👨‍🏫</div>
          <h3 className="text-xl font-semibold mb-2">Guias Experientes</h3>
          <p className="text-slate-300">
            Profissionais qualificados para garantir sua segurança e diversão.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Pronto para a aventura?</h2>
        <p className="text-slate-300 mb-6 max-w-xl mx-auto">
          Reserve já o seu passeio e viva momentos inesquecíveis em contato com a natureza.
        </p>
        <Link
          href="/servicos"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          Escolher Passeio
        </Link>
      </div>
    </div>
  );
}