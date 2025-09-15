# Gravata off Road — Landing + Disponibilidade (Next.js + Tailwind + Prisma + Supabase)

MVP com 5 rotas públicas, disponibilidade por data e captação de leads. Pronto para evoluir com um painel admin.

## Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Prisma ORM
- Postgres (Supabase Free)

## Setup
1. Instale as dependências
```bash
npm i
```
2. Crie um Postgres no Supabase (Free) e copie a connection string.
3. Configure variáveis de ambiente
```bash
cp .env.example .env.local
# edite .env.local e preencha DATABASE_URL
```
4. Prisma: gerar cliente, migrar e seed
```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```
5. Rodar
```bash
npm run dev
# http://localhost:3000
```

## Deploy (Vercel)
- Importe o repositório no Vercel.
- Defina DATABASE_URL nas Environment Variables do projeto.
- Primeiro deploy fará o build. Rode as migrações e seed localmente ou crie um script/cron conforme necessário.

## Estrutura de dados
- Passeio, Imagem, Disponibilidade e Lead conforme prisma/schema.prisma.
- Lógica de disponibilidade por dia na página /servicos.

## Próximos passos sugeridos
- Autenticação (Supabase Auth ou NextAuth) e /admin protegido.
- CRUD de Passeios, Imagens (Supabase Storage) e Disponibilidades.
- Reserva/checkout e bloqueio de vagas.
