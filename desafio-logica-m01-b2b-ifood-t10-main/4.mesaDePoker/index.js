function solucao(min, max, valores) {
  const valoresAutorizados = valores.filter(valor => valor >= min && valor <= max);
  console.log(valoresAutorizados);
}

function processData(input) {
  const lines = input.trim().split("\n");
  const min = parseInt(lines[0]);
  const max = parseInt(lines[1]);
  const valores = lines[2].split(" ").map(valor => parseInt(valor, 10));
  solucao(min, max, valores);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
