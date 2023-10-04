const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const petProcurado = "Max";
let donoEncontrado = false;

for (const usuario of usuarios) {
    if (usuario.pets.includes(petProcurado)) {
        console.log(`O dono(a) do(a) ${petProcurado} é o(a) ${usuario.nome}`);
        donoEncontrado = true;
        break;
    }
}

if (!donoEncontrado) {
    console.log(`Que pena ${petProcurado}, não encontramos seu dono(a).`);
}
