const numeros = [8, 11, 4, 1];

let min = numeros[0];
let max = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < min) {
    min = numeros[i];
  }
  if (numeros[i] > max) {
    max = numeros[i];
  }
}

const maiorDiferenca = max - min;

console.log(maiorDiferenca);
