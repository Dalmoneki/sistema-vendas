import React from "react";

interface Cliente {
    id_cliente: number;
    nome: string;
    endereco: string;
    contato: string;
    cnpj: string;
    score: number;
}

const clientes: Cliente[] = [
    {
        id_cliente: 1,
        nome: "Maria Silva",
        endereco: "Rua das Flores, 123 - São Paulo, SP",
        contato: "(11) 98765-4321",
        cnpj: "12.345.678/0001-90",
        score: 85,
    },
    {
        id_cliente: 2,
        nome: "João Pereira",
        endereco: "Av. Central, 456 - Rio de Janeiro, RJ",
        contato: "(21) 91234-5678",
        cnpj: "98.765.432/0001-00",
        score: 72,
    },
    {
        id_cliente: 3,
        nome: "Empresa Exemplo LTDA",
        endereco: "Praça Principal, 789 - Belo Horizonte, MG",
        contato: "(31) 99876-5432",
        cnpj: "33.333.333/0001-33",
        score: 92,
    },
];

export default function ClientesPage() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4 text-yellow-600">Clientes</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-yellow-600 text-white">
                    <tr>
                        <th className="text-left py-2 px-4 border-b">ID</th>
                        <th className="text-left py-2 px-4 border-b">Nome</th>
                        <th className="text-left py-2 px-4 border-b">Endereço</th>
                        <th className="text-left py-2 px-4 border-b">Contato</th>
                        <th className="text-left py-2 px-4 border-b">CNPJ</th>
                        <th className="text-left py-2 px-4 border-b">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id_cliente}>
                            <td className="py-2 px-4 border-b">{cliente.id_cliente}</td>
                            <td className="py-2 px-4 border-b">{cliente.nome}</td>
                            <td className="py-2 px-4 border-b">{cliente.endereco}</td>
                            <td className="py-2 px-4 border-b">{cliente.contato}</td>
                            <td className="py-2 px-4 border-b">{cliente.cnpj}</td>
                            <td className="py-2 px-4 border-b">{cliente.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
