const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

const nomeProcurado = "Carlos";
let posicao = -1;

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === nomeProcurado) {
        posicao = i + 1;
        break;
    }
}

if (posicao !== -1) {
    console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`);
}
