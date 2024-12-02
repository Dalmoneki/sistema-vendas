class Venda {
    id: number;
    produtoId: number;
    quantidade: number;
    total: number;
  
    constructor(id: number, produtoId: number, quantidade: number, total: number) {
      this.id = id;
      this.produtoId = produtoId;
      this.quantidade = quantidade;
      this.total = total;
    }
  }
  
  export default Venda;
  