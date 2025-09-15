import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import DatePicker from './DatePicker';

interface Props {
  searchParams: { data?: string };
}

interface Passeio {
  id: string;
  nome: string;
  descricao: string;
  duracao: string;
  preco: number;
  ativo: boolean;
}

interface Imagem {
  id: string;
  url: string;
  principal: boolean;
  passeioId: string;
}

interface Disponibilidade {
  id: string;
  data: Date;
  capacidade: number;
  reservado: number;
  status: 'ABERTO' | 'FECHADO' | 'LOTADO';
  passeioId: string;
}

type PasseioWithRelations = Passeio & {
  imagens: Imagem[];
  disponibilidade: Disponibilidade[];
};

export default async function Servicos({ searchParams }: Props) {
  const selectedDate = searchParams.data || new Date().toISOString().split('T')[0];
  // const dateObj = new Date(selectedDate + 'T00:00:00.000Z');
  
  // Buscar todos os passeios ativos com suas imagens principais
  // TODO: Uncomment when database is available
  // const passeios = await prisma.passeio.findMany({
  //   where: { ativo: true },
  //   include: {
  //     imagens: {
  //       where: { principal: true },
  //       take: 1,
  //     },
  //     disponibilidade: {
  //       where: {
  //         data: {
  //           gte: new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()),
  //           lt: new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate() + 1),
  //         },
  //       },
  //       take: 1,
  //     },
  //   },
  // });

  // Mock data for build purposes
  const passeios: PasseioWithRelations[] = [];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Nossos Passeios</h1>
      
      <div className="mb-8">
        <DatePicker selectedDate={selectedDate} />
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {passeios.map((passeio: PasseioWithRelations) => {
          const disponibilidade = passeio.disponibilidade[0];
          const imagemPrincipal = passeio.imagens[0];
          
          let statusInfo = {
            available: false,
            message: 'Sem disponibilidade cadastrada',
            remaining: 0,
          };
          
          if (disponibilidade) {
            const remaining = disponibilidade.capacidade - disponibilidade.reservado;
            
            if (disponibilidade.status === 'FECHADO') {
              statusInfo = {
                available: false,
                message: 'Fechado para esta data',
                remaining: 0,
              };
            } else if (remaining <= 0) {
              statusInfo = {
                available: false,
                message: 'Esgotado',
                remaining: 0,
              };
            } else {
              statusInfo = {
                available: true,
                message: `${remaining} vagas disponíveis`,
                remaining,
              };
            }
          }
          
          return (
            <div
              key={passeio.id}
              className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700"
            >
              {imagemPrincipal && (
                <div className="relative h-48 w-full">
                  <Image
                    src={imagemPrincipal.url}
                    alt={passeio.nome}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{passeio.nome}</h3>
                <p className="text-slate-300 mb-4 text-sm">{passeio.descricao}</p>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-slate-400">Duração: {passeio.duracao}</span>
                  <span className="text-blue-400 font-semibold">
                    R$ {passeio.preco.toFixed(2)}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div
                    className={`text-sm font-medium ${
                      statusInfo.available ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {statusInfo.message}
                  </div>
                </div>
                
                {statusInfo.available ? (
                  <Link
                    href={`/contato?passeio=${encodeURIComponent(passeio.nome)}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                  >
                    Reservar
                  </Link>
                ) : (
                  <button
                    disabled
                    className="block w-full bg-slate-600 text-slate-400 text-center py-2 rounded-lg font-semibold cursor-not-allowed"
                  >
                    Indisponível
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {passeios.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Nenhum passeio disponível</h2>
          <p className="text-slate-300">
            No momento não temos passeios cadastrados. Volte em breve!
          </p>
        </div>
      )}
    </div>
  );
}