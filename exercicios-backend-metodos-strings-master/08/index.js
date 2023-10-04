function removerPontuacao(cpfCnpj) {
    const resultado = cpfCnpj.replace(/[^\d]/g, "");
    console.log(resultado);
}

const cpf = "011.022.033-44";
removerPontuacao(cpf);
