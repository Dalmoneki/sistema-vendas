import React from 'react';

const Dashboard = () => (
  <div className="bg-gradient-to-b from-pink-200 to-white py-16 px-8">
    <h2 className="text-3xl font-bold text-center mb-4">Sistema de Vendas</h2>
    <p className="text-center mb-8">Sistema de gerenciamento de vendas e estoque</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { letra: 'V', titulo: 'Vendas', descricao: 'Gerenciar vendas e pedidos' },
        { letra: 'E', titulo: 'Estoque', descricao: 'Gerenciar estoque de cosméticos' },
        { letra: 'C', titulo: 'Clientes', descricao: 'Gerenciar cadastro de clientes' },
        { letra: 'B', titulo: 'Boletos', descricao: 'Gerenciar boletos e cobranças' },
        { letra: 'P', titulo: 'Pagamentos', descricao: 'Registrar e controlar pagamentos' },
        { letra: 'C', titulo: 'Cobranças', descricao: 'Gerar e acompanhar cobranças' },
        { letra: 'Á', titulo: 'Árvore de Materiais', descricao: 'Controlar fórmulas e ingredientes' },
        { letra: 'F', titulo: 'Fornecedores', descricao: 'Cadastro e gestão de fornecedores' },
      ].map((card) => (
        <div
          key={card.titulo}
          className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition"
        >
          <div className="bg-yellow-200 text-yellow-700 font-bold text-4xl rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
            {card.letra}
          </div>
          <h3 className="font-bold text-lg">{card.titulo}</h3>
          <p className="text-sm text-gray-600">{card.descricao}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
