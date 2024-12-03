// src/client.ts

export interface Cliente {
    id_cliente: number;
    nome: string;
    endereco: string;
    contato: string;
    cnpj: string; // Adicionado o CNPJ
    score: number; // Adicionado o Score do Cliente
}

// Adicione clientes mockados, se necessário, para teste
export const clientesMock: Cliente[] = [
    {
        id_cliente: 1,
        nome: "Loja Exemplo",
        endereco: "Rua Exemplo, 123",
        contato: "contato@lojaexemplo.com",
        cnpj: "12.345.678/0001-99",
        score: 85, // Cliente confiável
    },
    {
        id_cliente: 2,
        nome: "Mercado Teste",
        endereco: "Avenida Teste, 456",
        contato: "mercado@teste.com",
        cnpj: "98.765.432/0001-88",
        score: 70, // Score médio
    },
];
