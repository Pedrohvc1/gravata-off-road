import { prisma } from "../lib/prisma";

function atMidnightLocal(d = new Date()) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
}
function addDays(d: Date, days: number) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + days);
}

async function main() {
  await prisma.disponibilidade.deleteMany();
  await prisma.imagem.deleteMany();
  await prisma.passeio.deleteMany();
  await prisma.lead.deleteMany();

  const trilhaCurta = await prisma.passeio.create({
    data: {
      nome: "Trilha Curta",
      descricao: "Passeio leve para iniciantes, com paradas para fotos.",
      precoCentavos: 9900,
      duracaoMin: 60,
      ativo: true,
      imagens: {
        create: [
          { url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop", principal: true },
        ],
      },
    },
  });

  const trilhaMedia = await prisma.passeio.create({
    data: {
      nome: "Trilha Média",
      descricao: "Cenários com subidas moderadas e mirantes.",
      precoCentavos: 14900,
      duracaoMin: 90,
      ativo: true,
      imagens: {
        create: [
          { url: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200&auto=format&fit=crop", principal: true },
        ],
      },
    },
  });

  const trilhaAvancada = await prisma.passeio.create({
    data: {
      nome: "Trilha Avançada",
      descricao: "Percurso técnico para experientes, com trechos desafiadores.",
      precoCentavos: 19900,
      duracaoMin: 120,
      ativo: true,
      imagens: {
        create: [
          { url: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1200&auto=format&fit=crop", principal: true },
        ],
      },
    },
  });

  const base = atMidnightLocal(new Date());
  const dias = [0, 1, 2, 3, 4].map((n) => addDays(base, n));

  await prisma.disponibilidade.createMany({
    data: [
      { passeioId: trilhaCurta.id, data: dias[0], capacidade: 8, reservados: 2, status: "ABERTO" },
      { passeioId: trilhaMedia.id, data: dias[0], capacidade: 6, reservados: 6, status: "ABERTO" },
      { passeioId: trilhaAvancada.id, data: dias[0], capacidade: 0, reservados: 0, status: "FECHADO" },

      { passeioId: trilhaCurta.id, data: dias[1], capacidade: 8, reservados: 1, status: "ABERTO" },
      { passeioId: trilhaMedia.id, data: dias[1], capacidade: 6, reservados: 3, status: "ABERTO" },

      { passeioId: trilhaCurta.id, data: dias[2], capacidade: 10, reservados: 0, status: "ABERTO" },
      { passeioId: trilhaAvancada.id, data: dias[2], capacidade: 5, reservados: 5, status: "ABERTO" },

      { passeioId: trilhaMedia.id, data: dias[3], capacidade: 0, reservados: 0, status: "FECHADO" },

      { passeioId: trilhaCurta.id, data: dias[4], capacidade: 8, reservados: 0, status: "ABERTO" },
      { passeioId: trilhaMedia.id, data: dias[4], capacidade: 6, reservados: 0, status: "ABERTO" },
      { passeioId: trilhaAvancada.id, data: dias[4], capacidade: 4, reservados: 1, status: "ABERTO" },
    ],
  });
}

main()
  .then(async () => { console.log("Seed concluído."); await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
