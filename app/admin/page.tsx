export default function Admin() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Painel Administrativo</h1>
        
        <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
          <h2 className="text-2xl font-semibold mb-6">🚧 Em Desenvolvimento</h2>
          
          <p className="text-slate-300 mb-6">
            Esta página está sendo desenvolvida e em breve terá as seguintes funcionalidades:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Gestão de Passeios</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Criar e editar passeios</li>
                <li>• Gerenciar imagens</li>
                <li>• Definir preços e durações</li>
                <li>• Ativar/desativar passeios</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Controle de Disponibilidade</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Configurar calendário de disponibilidade</li>
                <li>• Definir capacidades por data</li>
                <li>• Gerenciar reservas</li>
                <li>• Controlar status (aberto/fechado)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Gestão de Leads</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Visualizar leads recebidos</li>
                <li>• Filtrar por data e passeio</li>
                <li>• Marcar como respondido</li>
                <li>• Exportar relatórios</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Relatórios</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Relatório de vendas</li>
                <li>• Análise de demanda</li>
                <li>• Estatísticas de ocupação</li>
                <li>• Relatório de leads</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-600/20 border border-blue-600 rounded-lg">
            <h4 className="font-semibold mb-2">📋 Próximos Passos</h4>
            <p className="text-sm text-slate-300">
              Para implementar a autenticação e as funcionalidades administrativas, será necessário:
            </p>
            <ul className="text-sm text-slate-300 mt-2 space-y-1">
              <li>1. Implementar sistema de autenticação (NextAuth.js recomendado)</li>
              <li>2. Criar middleware de proteção para rotas administrativas</li>
              <li>3. Desenvolver interface para cada funcionalidade listada</li>
              <li>4. Implementar APIs para operações CRUD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}