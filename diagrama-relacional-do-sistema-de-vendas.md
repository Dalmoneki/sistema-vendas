# Diagrama Relacional do Sistema de Vendas

```mermaid
erDiagram
    CLIENTE ||--o{ PEDIDO_VENDA : "faz"
    PEDIDO_VENDA ||--|{ ITEM_PEDIDO : "contém"
    ITEM_PEDIDO }o--|| PRODUTO : "referencia"
    PEDIDO_VENDA ||--o| NOTA_FISCAL : "gera"
    NOTA_FISCAL ||--o| BOLETO : "gera"
    BOLETO ||--o| PAGAMENTO : "resulta em"
    PEDIDO_VENDA ||--o{ COMPRA_MATERIA_PRIMA : "origina"
    COMPRA_MATERIA_PRIMA }o--|| FORNECEDOR : "feita para"
    PRODUTO ||--o{ PRODUCAO : "é produzido em"
    PRODUCAO ||--|{ ITEM_PRODUCAO : "utiliza"
    ITEM_PRODUCAO }o--|| MATERIA_PRIMA : "consome"
    NOTA_FISCAL ||--o| FACTORING : "negociada em"
    CLIENTE ||--o| AVALIACAO_CREDITO : "possui"
    ENTREGA ||--|| PEDIDO_VENDA : "realizada para"

    CLIENTE {
        int id_cliente
        string nome
        string endereco
        string contato
    }
    PEDIDO_VENDA {
        int id_pedido
        date data_pedido
        decimal valor_total
        string status
    }
    ITEM_PEDIDO {
        int id_item
        int quantidade
        decimal preco_unitario
    }
    PRODUTO {
        int id_produto
        string nome
        string descricao
        decimal preco
    }
    NOTA_FISCAL {
        int id_nota
        date data_emissao
        decimal valor_total
    }
    BOLETO {
        int id_boleto
        date data_vencimento
        decimal valor
        string status
    }
    PAGAMENTO {
        int id_pagamento
        date data_pagamento
        decimal valor_pago
    }
    COMPRA_MATERIA_PRIMA {
        int id_compra
        date data_compra
        decimal valor_total
    }
    FORNECEDOR {
        int id_fornecedor
        string nome
        string contato
    }
    PRODUCAO {
        int id_producao
        date data_inicio
        date data_fim
        int quantidade_produzida
    }
    ITEM_PRODUCAO {
        int id_item_producao
        int quantidade_usada
    }
    MATERIA_PRIMA {
        int id_materia_prima
        string nome
        decimal quantidade_estoque
    }
    FACTORING {
        int id_factoring
        string nome_empresa
        decimal taxa_negociacao
    }
    AVALIACAO_CREDITO {
        int id_avaliacao
        string status_credito
        decimal limite_credito
    }
    ENTREGA {
        int id_entrega
        date data_entrega
        string status
    }