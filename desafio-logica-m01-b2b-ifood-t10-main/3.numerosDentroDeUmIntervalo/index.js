function solucao(numero, limiteInferior, limiteSuperior) {
    const pertence = [limiteInferior, limiteSuperior].reduce((acumulador, elementoAtual) => acumulador || (numero >= elementoAtual), false);
    
    if (pertence) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }
};

function processData(input) {
    const lista = input.split(" ");
    solucao(parseInt(lista[0], 10), parseInt(lista[1], 10), parseInt(lista[2], 10));
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