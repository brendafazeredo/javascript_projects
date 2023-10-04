const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const frutasReverse = frutas.slice().reverse();
const frutasReverseString = frutasReverse.join(', ');

console.log(frutasReverseString);

frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1);
frutas.splice(frutas.length, 0, 'Melão');

console.log(frutas);
