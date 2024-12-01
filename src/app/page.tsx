import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  { title: "Vendas", description: "Gerenciar vendas e pedidos", href: "/vendas", letter: "V" },
  { title: "Estoque", description: "Gerenciar estoque de cosméticos", href: "/estoque", letter: "E" },
  { title: "Clientes", description: "Gerenciar cadastro de clientes", href: "/clientes", letter: "C" },
  { title: "Boletos", description: "Gerenciar boletos e cobranças", href: "/boletos", letter: "B" },
  { title: "Pagamentos", description: "Registrar e controlar pagamentos", href: "/pagamentos", letter: "P" },
  { title: "Cobranças", description: "Gerar e acompanhar cobranças", href: "/cobrancas", letter: "C" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <main className="flex-grow bg-[#FFE4E1] py-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Sistema de Vendas
          </h1>
          <p className="text-lg text-center mb-4 text-gray-600">
            Sistema de gerenciamento de vendas e estoque
          </p>
          {/* Grid para os itens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Link href={item.href} key={index} className="block h-full">
                <Card className="h-full bg-white hover:bg-gray-50 transition-all shadow-md border border-gray-200 rounded-lg">
                  <CardContent className="flex flex-col items-center text-center h-full p-6">
                    {/* Ícone no círculo */}
                    <div className="w-16 h-16 bg-[#FFF9E5] rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-semibold text-[#FFB800]">
                        {item.letter}
                      </span>
                    </div>
                    {/* Título e descrição */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
