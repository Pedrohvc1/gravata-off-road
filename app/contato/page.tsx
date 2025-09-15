import ContactForm from './ContactForm';

interface Props {
  searchParams: { passeio?: string };
}

export default function Contato({ searchParams }: Props) {
  const selectedPasseio = searchParams.passeio;

  return (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>
        
        <p className="text-center text-slate-300 mb-8">
          {selectedPasseio 
            ? `Interessado no passeio "${selectedPasseio}"? Preencha o formulário abaixo e entraremos em contato.`
            : 'Tem dúvidas ou quer agendar um passeio? Preencha o formulário abaixo e entraremos em contato.'
          }
        </p>
        
        <ContactForm selectedPasseio={selectedPasseio} />
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <strong>Telefone:</strong> (51) 99999-9999
              </div>
              <div>
                <strong>WhatsApp:</strong> (51) 99999-9999
              </div>
              <div>
                <strong>Email:</strong> contato@gravataoffroad.com.br
              </div>
              <div>
                <strong>Horário de Atendimento:</strong><br />
                Segunda à Sexta: 8h às 18h<br />
                Sábado: 8h às 14h
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Localização</h3>
            <div className="text-slate-300">
              <p className="mb-3">
                <strong>Endereço:</strong><br />
                Estrada Rural, km 15<br />
                Gravataí - RS<br />
                CEP: 94000-000
              </p>
              <p className="text-sm">
                * Localização exata será enviada após confirmação do agendamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}