const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            return "Valor inválido para depósito.";
        }
        
        this.saldo += valor;

        const historico = {
            tipo: "Depósito",
            valor: valor,
        };

        this.historicos.push(historico);

        return `Depósito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`;
    },

    sacar: function(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            return "Valor inválido para saque.";
        }

        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`;
        }

        this.saldo -= valor;

        const historico = {
            tipo: "Saque",
            valor: valor,
        };

        this.historicos.push(historico);

        return `Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`;
    },

    extrato: function() {
        let historicoString = "Histórico:\n";
        for (const historico of this.historicos) {
            historicoString += `${historico.tipo} de R$${(historico.valor / 100).toFixed(2)}\n`;
        }

        return `Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}\n${historicoString}`;
    }
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
