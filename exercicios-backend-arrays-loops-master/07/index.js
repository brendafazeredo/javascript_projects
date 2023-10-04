const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesIniciandoEmA = [];
for (let nome of nomes) {
    const inicial = nome[0];

    if (inicial === "A" || inicial === "a") {
        nomesIniciandoEmA.push(nome);
    }
}

console.log(nomesIniciandoEmA);
