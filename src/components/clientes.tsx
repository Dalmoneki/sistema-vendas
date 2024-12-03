// src/components/Clientes.tsx
import React from "react";
import { clientesMock } from "../client";

const Clientes: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Clientes</h1>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Nome</th>
                        <th className="border border-gray-300 px-4 py-2">CNPJ</th>
                        <th className="border border-gray-300 px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {clientesMock.map((cliente) => (
                        <tr key={cliente.id_cliente}>
                            <td className="border border-gray-300 px-4 py-2">{cliente.id_cliente}</td>
                            <td className="border border-gray-300 px-4 py-2">{cliente.nome}</td>
                            <td className="border border-gray-300 px-4 py-2">{cliente.cnpj}</td>
                            <td className="border border-gray-300 px-4 py-2">{cliente.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Clientes;
