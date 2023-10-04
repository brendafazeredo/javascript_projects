let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, '0');

nome = nome.toLowerCase().replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());

email = email.trim();

console.log(identificador);
console.log(nome);
console.log(email);
