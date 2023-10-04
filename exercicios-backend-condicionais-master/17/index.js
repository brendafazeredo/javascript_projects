//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcelas = valorDoProduto / quantidadeDoParcelamento / 100;
const parcelasPagas = valorPago / valorParcelas;

console.log(`Restam ${parcelasPagas} parcelas de R$${valorParcelas.toFixed(2)}`);
