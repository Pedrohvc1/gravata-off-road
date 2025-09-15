import { NextRequest, NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, mensagem, passeio } = body;

    // Validação básica
    if (!nome || !email) {
      return NextResponse.json(
        { error: 'Nome e email são obrigatórios' },
        { status: 400 }
      );
    }

    // TODO: Uncomment when database is available
    // // Buscar o passeio se foi especificado
    // let passeioId = null;
    // if (passeio) {
    //   const passeioEncontrado = await prisma.passeio.findFirst({
    //     where: { nome: passeio }
    //   });
    //   passeioId = passeioEncontrado?.id || null;
    // }

    // // Criar o lead
    // const lead = await prisma.lead.create({
    //   data: {
    //     nome,
    //     email,
    //     telefone: telefone || null,
    //     mensagem: mensagem || null,
    //     passeioId,
    //   }
    // });

    // For now, just return success without saving to database
    console.log('Lead received:', { nome, email, telefone, mensagem, passeio });

    return NextResponse.json(
      { message: 'Lead criado com sucesso', id: 'mock-id' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Erro ao criar lead:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}