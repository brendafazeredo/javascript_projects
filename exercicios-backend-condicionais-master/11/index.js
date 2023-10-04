//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos > 60) {
    console.log("Você não deve nada para a Cubos!");
} else if (totalJaPagoPeloAluno >= 18000000) {
    console.log("Você já quitou todas as parcelas!");
} else if (rendaMensalEmCentavos < 2000000) {
    console.log("O valor da parcela desse mês é de R$ 0 reais . Nenhum valor é devido, pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else {
    const valorParcela = (rendaMensalEmCentavos / 100) * 18 / 100;
    console.log(`O valor da parcela desse mês é de R$${valorParcela} reais!`);
}
