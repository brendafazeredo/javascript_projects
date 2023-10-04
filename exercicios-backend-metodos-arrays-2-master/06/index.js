const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const resultado = cidades.filter((palavra) => {
    return palavra.length <= 8;
});

const formatado = resultado.join(", ");

console.log(resultado);
console.log(formatado);
