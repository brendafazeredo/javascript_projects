function solucao(min, km) {
    const precoPorMinuto = 50;
    const precoPorKm = 70;
    const precoPorKmAdicional = 50;
    const precoPorMinAdicional = 30;

    let resultado = 0;

    if (min <= 20) {
        resultado += min * precoPorMinuto;
    } else {
        resultado += 20 * precoPorMinuto + (min - 20) * precoPorMinAdicional;
    }
    
    if (km <= 10) {
        resultado += km * precoPorKm;
    } else {
        resultado += 10 * precoPorKm;
        if (km > 10) {
            resultado += (km - 10) * precoPorKmAdicional;
        }
    }
    console.log(Math.floor(resultado));
}


function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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
