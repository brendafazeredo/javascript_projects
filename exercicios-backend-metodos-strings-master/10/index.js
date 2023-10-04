function validarArquivo(nomeArquivo) {
    const extensoesPermitidas = ['jpg', 'jpeg', 'gif', 'png'];
    const extensao = nomeArquivo.split('.').pop().toLowerCase();

    if (extensoesPermitidas.includes(extensao)) {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

const nomeArquivo = 'Foto da Familia.pdf';
const nomeArquivo2 = 'Foto da Familia.png';

validarArquivo(nomeArquivo);
validarArquivo(nomeArquivo2);
