# Gravata off Road

Uma plataforma moderna para agendamento de passeios de quadriciclo, desenvolvida com Next.js 14, Tailwind CSS e Prisma.

## 🚀 Tecnologias

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Banco de Dados:** PostgreSQL (Supabase recomendado)
- **Deploy:** Preparado para Vercel

## 📋 Funcionalidades

### Páginas Públicas
- **Home (/)**: Página inicial com apresentação da empresa e CTAs
- **Sobre (/sobre)**: Informações sobre a empresa e valores
- **Serviços (/servicos)**: Listagem de passeios com disponibilidade por data
- **Preços (/precos)**: Tabela de preços e pacotes
- **Contato (/contato)**: Formulário de contato que salva leads no banco

### Sistema de Disponibilidade
- Seleção de data com atualização da disponibilidade em tempo real
- Cálculo automático de vagas disponíveis (capacidade - reservado)
- Status dinâmico: Aberto, Fechado, Lotado ou Sem disponibilidade
- Integração com formulário de contato pré-preenchido

### Admin (Esqueleto)
- **Painel Admin (/admin)**: Página placeholder preparada para futuras funcionalidades

### API
- **POST /api/leads**: Endpoint para salvar leads de contato

## 🛠️ Configuração do Projeto

### Pré-requisitos
- Node.js 18+
- PostgreSQL (Supabase recomendado)

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/Pedrohvc1/gravata-off-road.git
cd gravata-off-road
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o banco de dados:**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o .env com sua URL do banco de dados
# DATABASE_URL="postgresql://username:password@localhost:5432/gravata_off_road?schema=public"
```

4. **Configure o Prisma:**
```bash
# Gere o cliente Prisma
npm run prisma:generate

# Execute as migrações
npm run prisma:migrate

# Execute o seed para dados de exemplo
npm run prisma:seed
```

5. **Execute em desenvolvimento:**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 📊 Estrutura do Banco de Dados

### Models principais:
- **Passeio**: Tours disponíveis (nome, descrição, preço, duração)
- **Imagem**: Imagens dos passeios (com suporte a imagem principal)
- **Disponibilidade**: Controle de datas, capacidade e status
- **Lead**: Contatos recebidos pelo formulário

### Status de Disponibilidade:
- `ABERTO`: Disponível para reservas
- `FECHADO`: Não disponível (manutenção, clima, etc.)
- `LOTADO`: Capacidade esgotada

## 🚀 Deploy na Vercel

1. **Conecte seu repositório na Vercel**
2. **Configure a variável de ambiente:**
   - `DATABASE_URL`: URL do seu banco PostgreSQL
3. **Deploy automático a cada push**

### Recomendações para produção:
- Use Supabase para banco PostgreSQL gratuito
- Configure domínio personalizado
- Implemente monitoramento de erros (Sentry)
- Configure analytics (Vercel Analytics)

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm run start

# Lint
npm run lint

# Prisma
npm run prisma:generate   # Gerar cliente
npm run prisma:migrate    # Executar migrações
npm run prisma:seed       # Popular banco com dados de exemplo
```

## 🔧 Próximos Desenvolvimentos

### Painel Administrativo
- [ ] Sistema de autenticação
- [ ] CRUD de passeios
- [ ] Gestão de disponibilidade
- [ ] Relatórios de leads e vendas

### Melhorias do Frontend
- [ ] Sistema de reservas online
- [ ] Integração com pagamento
- [ ] Galeria de fotos
- [ ] Depoimentos de clientes

### Integrações
- [ ] WhatsApp Business API
- [ ] Google Calendar
- [ ] Sistema de email marketing

## 📞 Suporte

Em caso de dúvidas ou problemas, abra uma issue no repositório ou entre em contato.