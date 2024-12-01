import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] bg-gray-50">
      <h1 className="text-[80px] font-bold text-[#1f2937]">404</h1>
      <h2 className="text-2xl font-semibold text-[#4b5563] mt-4">Página Não Encontrada</h2>
      <p className="text-[#6b7280] mt-4">A página que você está procurando não existe.</p>
      <Link 
        href="/" 
        className="mt-8 px-6 py-3 bg-[#4285f4] text-white rounded-lg hover:bg-[#4285f4]/90 transition-colors"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  )
}

