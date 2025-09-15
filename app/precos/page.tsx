export default function Precos() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Preços e Pacotes</h1>
        
        <p className="text-center text-slate-300 mb-12 text-lg">
          Escolha o passeio ideal para sua aventura. Todos os preços incluem equipamentos de segurança e guia especializado.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Passeio Básico */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold mb-4">Trilha Básica</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">R$ 120</div>
            <p className="text-slate-300 mb-4">Por pessoa</p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li>✓ Duração: 1 hora</li>
              <li>✓ Trilha para iniciantes</li>
              <li>✓ Equipamentos inclusos</li>
              <li>✓ Guia especializado</li>
              <li>✓ Briefing de segurança</li>
            </ul>
            <p className="text-sm text-slate-400">
              Perfeito para quem nunca pilotou quadriciclo ou quer uma experiência mais tranquila.
            </p>
          </div>
          
          {/* Passeio Intermediário */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-blue-600">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              Mais Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Aventura Completa</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">R$ 180</div>
            <p className="text-slate-300 mb-4">Por pessoa</p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li>✓ Duração: 2 horas</li>
              <li>✓ Trilhas variadas</li>
              <li>✓ Paradas para fotos</li>
              <li>✓ Lanche incluso</li>
              <li>✓ Equipamentos premium</li>
              <li>✓ Guia especializado</li>
            </ul>
            <p className="text-sm text-slate-400">
              Ideal para quem busca uma experiência completa com diferentes terrenos e paisagens.
            </p>
          </div>
          
          {/* Passeio Premium */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold mb-4">Expedição Premium</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">R$ 280</div>
            <p className="text-slate-300 mb-4">Por pessoa</p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li>✓ Duração: 3 horas</li>
              <li>✓ Trilhas exclusivas</li>
              <li>✓ Almoço incluso</li>
              <li>✓ Fotógrafo profissional</li>
              <li>✓ Quadriciclos top de linha</li>
              <li>✓ Grupo pequeno (máx. 6 pessoas)</li>
            </ul>
            <p className="text-sm text-slate-400">
              Para os aventureiros que querem viver uma experiência única e exclusiva.
            </p>
          </div>
        </div>
        
        {/* Informações Adicionais */}
        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Informações Importantes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Incluído em todos os pacotes:</h3>
              <ul className="text-slate-300 space-y-1">
                <li>• Capacete e óculos de proteção</li>
                <li>• Briefing completo de segurança</li>
                <li>• Guia especializado</li>
                <li>• Seguro de acidentes pessoais</li>
                <li>• Combustível</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Condições:</h3>
              <ul className="text-slate-300 space-y-1">
                <li>• Idade mínima: 16 anos</li>
                <li>• CNH obrigatória (categoria A ou B)</li>
                <li>• Grupos de no mínimo 2 pessoas</li>
                <li>• Agendamento com 24h de antecedência</li>
                <li>• Cancelamento gratuito até 12h antes</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-300 mb-4">Pronto para sua aventura?</p>
          <a
            href="/contato"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Agendar Passeio
          </a>
        </div>
      </div>
    </div>
  );
}