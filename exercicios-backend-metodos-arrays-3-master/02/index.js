const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const resultado = cidades.reduce((acumulador, elementoAtual) => {
    return elementoAtual.length > acumulador.length ? elementoAtual : acumulador;
});

console.log(resultado);
