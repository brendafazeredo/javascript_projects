function solucao(texto) {
    const palavras = texto.split(" ");

    const palavrasFiltradas = palavras.filter(palavra => palavra !== "");

    console.log(palavrasFiltradas.length);
};

function processData(input) {
    solucao(input);
};

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
