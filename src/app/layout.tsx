import React from "react";
import "./globals.css";

export const metadata = {
    title: "Sistema de Vendas",
    description: "Gerenciamento de vendas, estoque, e clientes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <body>
                <header className="bg-yellow-600 text-white p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Sistema de Vendas</h1>
                        <nav className="flex space-x-4">
                            <a href="/produtos" className="hover:text-yellow-200">
                                Produtos
                            </a>
                            <a href="/vendas" className="hover:text-yellow-200">
                                Vendas
                            </a>
                            <a href="/fornecedores" className="hover:text-yellow-200">
                                Fornecedores
                            </a>
                            <a href="/estoque" className="hover:text-yellow-200">
                                Estoque
                            </a>
                            <a href="/clientes" className="hover:text-yellow-200">
                                Clientes
                            </a>
                        </nav>
                    </div>
                </header>
                <main className="container mx-auto py-4">{children}</main>
                <footer className="bg-gray-800 text-white text-center p-4">
                    <p>
                        &copy; {new Date().getFullYear()} Sistema de Vendas. Desenvolvido por
                        <strong> Dalmoneki & ChatGPT ❤️</strong>
                    </p>
                </footer>
            </body>
        </html>
    );
}
