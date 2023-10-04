const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const numeroCrescente = numeros.sort((a, b) => {
    return a - b;
});

console.log(numeroCrescente);

const numeroDecrescente = numeros.sort((a, b) => {
    return b - a;
});

console.log(numeroDecrescente);

const numerosUnicode = numeros.sort();

console.log(numerosUnicode);

const frutasOrdemAlfabetica = frutas.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
});

console.log(frutasOrdemAlfabetica);

const frutasOrdemAlfabeticaDec = frutas.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return 1;
    }
});

console.log(frutasOrdemAlfabeticaDec);

const frutasOrdemAlfabeticaCarac = frutas.sort((a, b) => {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
});

console.log(frutasOrdemAlfabeticaCarac);
