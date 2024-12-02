class Fornecedor {
    id: number;
    nome: string;
    cnpj: string;
    telefone: string;
  
    constructor(id: number, nome: string, cnpj: string, telefone: string) {
      this.id = id;
      this.nome = nome;
      this.cnpj = cnpj;
      this.telefone = telefone;
    }
  }
  
  export default Fornecedor;
  