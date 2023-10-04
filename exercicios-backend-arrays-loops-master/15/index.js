const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let i = 0; i < original.length; i++) {
    const resto = original[i] % 2;
    if (resto === 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}

console.log(pares);
console.log(impares);
