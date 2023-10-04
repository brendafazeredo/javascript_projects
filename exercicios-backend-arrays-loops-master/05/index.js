const original = [1, 4, 12, 21, 53, 88, 112];

let numeroPar = [];
for (let numero of original) {
    if (numero % 2 === 0) {
        numeroPar.push(numero);
    }
}

console.log(numeroPar);
