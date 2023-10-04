function validacaoEmail(email) {
    const emailValido = email.includes("@") && email.includes(".");

    const pontoInicial = email[0] !== ".";
    const pontoFinal = email[email.length - 1] !== ".";

    if (emailValido && pontoInicial && pontoFinal) {
        return "E-mail válido";
    } else {
        return "E-mail inválido";
    }
}

const emails = [
    "jose@cubos.academy",
    "jose@cubos.academy.br",
    "jose.messias@cubos.academy",
    "jose.messias@cubos.io",
    "jose@cubos",
    "jose.messias@cubos",
    "jose.messias@.",
    "jose.@cubos",
    ".@",
    "@.",
    "jose.messias@cubos.",
    ".messias@cubos.",
    ".messias@cubos"
];

for (const email of emails) {
    console.log(validacaoEmail(email));
}
