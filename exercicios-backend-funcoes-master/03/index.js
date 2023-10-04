const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function(totalPagar, desconto) {
        const totalItens = this.calcularTotalDeItens();
        
        console.log(`Cliente: ${this.nomeDoCliente}`);
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`);
        }
        
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$ ${(totalPagar / 100).toFixed(2)}`);
        console.log(`Desconto: R$ ${(desconto / 100).toFixed(2)}`);
        console.log(`Total com desconto: R$ ${((totalPagar - desconto) / 100).toFixed(2)}`);
    },
    addProduto: function(produto) {
        const produtoExistente = this.produtos.find(p => p.id === produto.id);

        if (produtoExistente) {
            produtoExistente.qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function() {
        const totalPagar = this.calcularTotalAPagar();
        const desconto = this.calcularDesconto();
        
        this.imprimirResumo(totalPagar, desconto);
    },
    calcularTotalDeItens: function() {
        let totalItens = 0;
        for (const produto of this.produtos) {
            totalItens += produto.qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: function() {
        let totalPagar = 0;
        for (const produto of this.produtos) {
            totalPagar += produto.qtd * produto.precoUnit;
        }
        return totalPagar;
    },
    calcularDesconto: function() {
        const totalItens = this.calcularTotalDeItens();
        const totalPagar = this.calcularTotalAPagar();
        let desconto = 0;

        if (totalItens > 4) {
            const itemMaisBarato = Math.min(...this.produtos.map(p => p.precoUnit));
            desconto += itemMaisBarato;
        }

        if (totalPagar > 10000) {
            desconto += totalPagar * 0.1;
        }

        return desconto;
    }
};

const novoTenis = {
    id: 3,
    nome: "Tênis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();
