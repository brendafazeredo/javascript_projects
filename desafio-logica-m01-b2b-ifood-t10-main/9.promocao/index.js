function solucao(precos) {
  precos.sort((a, b) => a - b);

  if (precos.length === 2) {
    console.log(precos[0] + precos[1]);
    return;
  };

  const desconto = precos[0] / 2;
  const total = precos.reduce((acumulador, elementoAtual) => acumulador + elementoAtual);
  const valorFinal = total - desconto;

  console.log(valorFinal);
};

function processData(input) {
  const lista = input.trim().split(" ");
  lista.forEach((x, i, a) => (a[i] = parseInt(x, 10)));
  solucao(lista);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
