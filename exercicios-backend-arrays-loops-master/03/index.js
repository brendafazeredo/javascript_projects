const numeros = [54, 22, 14, 87, 10, 284];

for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        resultado = i;
        break;
    }
}

console.log(resultado);
