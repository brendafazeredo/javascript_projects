function solucao(carta) {
    const cartas = ["Q", "J", "K", "A", "2", "3"];
    const manilhas = ["J", "K", "A", "2", "3", "Q"];

    const indexOf = cartas.indexOf(carta);
    const manilha = manilhas[indexOf];

    return manilha;
}

function processData(input) {
    const cartaParaCima = input.trim();
    const manilha = solucao(cartaParaCima);
    console.log(manilha);
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
