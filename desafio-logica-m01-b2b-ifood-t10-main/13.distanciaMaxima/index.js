function processData(input) {
    const linhas = input.trim().split('\n');
    const N = parseInt(linhas[0]);
    const funcionarios = [];

    for (let i = 1; i <= N; i++) {
        const [X, Y] = linhas[i].split(' ').map(parseFloat);
        funcionarios.push({ X, Y });
    };

    let maiorDistancia = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const X1 = funcionarios[i].X;
            const Y1 = funcionarios[i].Y;
            const X2 = funcionarios[j].X;
            const Y2 = funcionarios[j].Y;

            const distancia = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
            maiorDistancia = Math.max(maiorDistancia, distancia);
        };
    };

    console.log(maiorDistancia.toFixed(9));
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
