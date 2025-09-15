import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Limpar dados existentes
  await prisma.lead.deleteMany();
  await prisma.disponibilidade.deleteMany();
  await prisma.imagem.deleteMany();
  await prisma.passeio.deleteMany();

  // Criar passeios
  const passeios = await Promise.all([
    prisma.passeio.create({
      data: {
        nome: 'Trilha Básica',
        descricao: 'Perfeito para iniciantes, uma trilha suave através de campos e pequenas elevações.',
        duracao: '1 hora',
        preco: 120.0,
        ativo: true,
        imagens: {
          create: [
            {
              url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
              principal: true,
            }
          ]
        }
      }
    }),

    prisma.passeio.create({
      data: {
        nome: 'Aventura Completa',
        descricao: 'Experiência completa com diferentes terrenos, paradas para fotos e lanche incluso.',
        duracao: '2 horas',
        preco: 180.0,
        ativo: true,
        imagens: {
          create: [
            {
              url: 'https://images.unsplash.com/photo-1602009506513-82194cfb4b5e?w=800&h=600&fit=crop',
              principal: true,
            }
          ]
        }
      }
    }),

    prisma.passeio.create({
      data: {
        nome: 'Expedição Premium',
        descricao: 'Para aventureiros experientes, trilhas exclusivas com almoço e fotógrafo profissional.',
        duracao: '3 horas',
        preco: 280.0,
        ativo: true,
        imagens: {
          create: [
            {
              url: 'https://images.unsplash.com/photo-1609949312415-09b6fb8e1d6e?w=800&h=600&fit=crop',
              principal: true,
            }
          ]
        }
      }
    })
  ]);

  // Criar disponibilidades para os próximos 30 dias
  const hoje = new Date();
  const disponibilidades = [];

  for (let i = 0; i < 30; i++) {
    const data = new Date(hoje);
    data.setDate(hoje.getDate() + i);
    
    for (const passeio of passeios) {
      // Criar diferentes cenários de disponibilidade
      let capacidade = 8;
      let reservado = 0;
      let status: 'ABERTO' | 'FECHADO' | 'LOTADO' = 'ABERTO';
      
      // Simular diferentes situações
      const random = Math.random();
      if (random < 0.1) {
        status = 'FECHADO'; // 10% fechado
      } else if (random < 0.2) {
        reservado = capacidade; // 10% lotado
        status = 'LOTADO';
      } else if (random < 0.4) {
        reservado = Math.floor(capacidade * 0.5); // 20% meio cheio
      } else if (random < 0.6) {
        reservado = Math.floor(capacidade * 0.8); // 20% quase cheio
      }
      // 40% com poucas reservas ou vazio

      disponibilidades.push({
        data: data,
        capacidade,
        reservado,
        status,
        passeioId: passeio.id,
      });
    }
  }

  await prisma.disponibilidade.createMany({
    data: disponibilidades,
  });

  console.log(`✅ Seed concluído!`);
  console.log(`📍 Criados ${passeios.length} passeios`);
  console.log(`📅 Criadas ${disponibilidades.length} disponibilidades`);
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });