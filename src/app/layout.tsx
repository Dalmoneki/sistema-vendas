import './globals.css';
import './reset.css'; // Importe o reset.css
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Logo from '@/components/logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sistema de Gestão de Cosméticos',
  description: 'Nova Sensação Cosméticos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Cabeçalho fixo */}
        <header className="bg-secondary text-primary sticky top-0 z-10">
          <div className="container mx-auto px-4 flex items-center py-2">
            <div className="flex items-center gap-4">
              <Logo className="w-32 h-32" />
              <div className="ml-2">
                <h1 className="text-primary text-2xl font-semibold leading-tight">
                  Sistema de Gestão de Cosméticos
                </h1>
                <p className="text-primary text-base">Nova Sensação Cosméticos</p>
              </div>
            </div>
            <nav className="ml-auto">
              <ul className="flex gap-6">
                <li>
                  <Link
                    href="/vendas"
                    className="text-primary hover:text-[#FFC93D] transition-colors text-lg"
                  >
                    Vendas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estoque"
                    className="text-primary hover:text-[#FFC93D] transition-colors text-lg"
                  >
                    Estoque
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clientes"
                    className="text-primary hover:text-[#FFC93D] transition-colors text-lg"
                  >
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/relatorios"
                    className="text-primary hover:text-[#FFC93D] transition-colors text-lg"
                  >
                    Relatórios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/importar-notas"
                    className="text-primary hover:text-[#FFC93D] transition-colors text-lg"
                  >
                    Importar Notas
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="bg-[#FFE4E1] py-4"> 
          <div className="container mx-auto max-w-4xl px-4">{children}</div>
        </main>

        {/* Rodapé */}
        <footer className="bg-secondary text-primary text-center py-4">
          <p>© 2024 Nova Sensação Cosméticos. Desenvolvido com ❤️ por Gemini IA.</p>
        </footer>
      </body>
    </html>
  );
}