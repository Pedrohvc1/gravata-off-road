export default function Sobre() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre a Gravata off Road</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-slate-300 mb-6">
            A <strong>Gravata off Road</strong> nasceu da paixão pela aventura e pelo contato com a natureza. 
            Localizada em Gravataí, oferecemos experiências únicas de turismo rural e ecoturismo 
            através de passeios de quadriciclo.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Nossa Missão</h2>
          <p className="text-slate-300 mb-6">
            Proporcionar momentos inesquecíveis de aventura e diversão, sempre priorizando a 
            segurança dos nossos clientes e o respeito ao meio ambiente. Queremos que cada 
            passeio seja uma experiência transformadora.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Por que escolher a Gravata off Road?</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6">
            <li>Mais de 5 anos de experiência no setor</li>
            <li>Equipamentos novos e bem mantidos</li>
            <li>Guias treinados e certificados</li>
            <li>Trilhas exclusivas e seguras</li>
            <li>Compromisso com a preservação ambiental</li>
            <li>Atendimento personalizado</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Segurança em Primeiro Lugar</h2>
          <p className="text-slate-300 mb-6">
            Todos os nossos passeios incluem equipamentos de proteção individual (capacete, 
            óculos de proteção) e briefing completo sobre segurança. Nossos guias acompanham 
            todo o percurso garantindo que sua experiência seja divertida e segura.
          </p>
          
          <div className="bg-slate-800/50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
            <p className="text-slate-300">
              Ficou interessado? Entre em contato conosco para mais informações ou para 
              agendar seu passeio. Estamos prontos para proporcionar a melhor experiência 
              off-road da região!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}