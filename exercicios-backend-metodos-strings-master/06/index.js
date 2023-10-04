const celular1 = 7199918888;
const celular2 = 99918888;

console.log(formatarNumeroCelular(celular1));
console.log(formatarNumeroCelular(celular2));

function formatarNumeroCelular(celular) {
  const celularStr = celular.toString();

  if (celularStr.length === 10) {
    const ddd = celularStr.substring(0, 2);
    const prefixo = celularStr.substring(2, 6);
    const sufixo = celularStr.substring(6);

    return `(${ddd}) 9 ${prefixo}-${sufixo}`;
  } else if (celularStr.length === 8) {
    const prefixo = celularStr.substring(0, 4);
    const sufixo = celularStr.substring(4);

    return `9 ${prefixo}-${sufixo}`;
  } else {
    return "Número de celular inválido.";
  }
}
