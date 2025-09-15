import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { nome, email, mensagem, passeio } = await req.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });
    }

    await prisma.lead.create({
      data: {
        nome: String(nome),
        email: String(email),
        mensagem: String(mensagem),
        passeio: passeio ? String(passeio) : null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Erro desconhecido" }, { status: 500 });
  }
}
