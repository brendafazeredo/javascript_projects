const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const resultado = numeros.reduce((acumulador, elementoAtual) => {
    return Math.max(acumulador, elementoAtual);
});

console.log(resultado);
