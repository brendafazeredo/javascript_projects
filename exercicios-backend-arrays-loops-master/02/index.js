const letras = ["A", "a", "B", "C", "E", "e"];

let i = 0;

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        i++;
    }
}

if (i === 0) {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada!");
} else if (i === 1) {
    console.log("Foi encontrada 1 letra 'E' ou 'e'!");
} else {
    console.log(`Foram encontradas ${i} letras 'E' ou 'e'!`);
}
