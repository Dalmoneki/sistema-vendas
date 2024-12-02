export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          color: "#333",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Cabeçalho fixo */}
          <header
            style={{
              backgroundColor: "#333",
              color: "gold",
              padding: "10px",
              textAlign: "center",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1000,
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ height: "50px", width: "auto" }}
              />
              <h1 style={{ fontSize: "24px" }}>
                Sistema de Vendas - Controle Simplificado
              </h1>
              <div>
                <button style={buttonStyle}>Produtos</button>
                <button style={buttonStyle}>Vendas</button>
                <button style={buttonStyle}>Fornecedores</button>
                <button style={buttonStyle}>Estoque</button>
              </div>
            </div>
          </header>

          {/* Espaço reservado para o cabeçalho */}
          <div style={{ height: "80px" }}></div>

          {/* Conteúdo principal */}
          <main style={{ flex: 1, padding: "20px" }}>{children}</main>

          {/* Rodapé */}
          <footer
            style={{
              backgroundColor: "#333",
              color: "gold",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Desenvolvido por Dalmoneki e ChatGPT ❤️ © 2024 - Todos os Direitos Reservados
          </footer>
        </div>
      </body>
    </html>
  );
}

const buttonStyle = {
  background: "linear-gradient(to right, #FFA07A, #FFD700)",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  margin: "0 5px",
  cursor: "pointer",
  fontWeight: "bold",
};
