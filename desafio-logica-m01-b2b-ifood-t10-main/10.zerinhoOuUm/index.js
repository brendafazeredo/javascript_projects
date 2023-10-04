function solucao(jogadores) {
    let countZero = 0;
    let countUm = 0;
    let jogadorZero;
    let jogadorUm;
  
    for (const jogador of jogadores) {
      if (jogador.jogada === 0) {
        countZero++;
        jogadorZero = jogador.nome;
      } else if (jogador.jogada === 1) {
        countUm++;
        jogadorUm = jogador.nome;
      }
    }
  
    if (countZero === 1) {
      console.log(jogadorZero);
    } else if (countUm === 1) {
      console.log(jogadorUm);
    } else {
      console.log("NINGUEM");
    }
  }
  
function processData(input) {
  solucao(JSON.parse(input));
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
