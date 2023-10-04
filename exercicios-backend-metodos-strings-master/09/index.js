function gerarNickname(nome) {
    const nomeSemEspacos = nome.toLowerCase().replace(/\s/g, '');
    const maxCaracteres = 13;
    const nomeCurto = nomeSemEspacos.substring(0, maxCaracteres - 1);
    const nickname = `@${nomeCurto}`;
    console.log(nickname);
}

const nome = 'Guido Cerqueira';
gerarNickname(nome);
