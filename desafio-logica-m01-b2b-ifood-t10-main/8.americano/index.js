function solucao(numeros) {
    const soma = numeros.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0);
    let posicaoAtual = 1;
    for (let i = 1; i <= soma; i++) {
        if (posicaoAtual > numeros.length) {
            posicaoAtual = 1;
        };
        if (i === soma) {
            console.log(posicaoAtual);
            return;
        };
        posicaoAtual++;
    };
};

function processData(input) {
    const strings = input.split(" ");
    const numeros = [];
    for (let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i], 10));
    }
    solucao(numeros);
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
