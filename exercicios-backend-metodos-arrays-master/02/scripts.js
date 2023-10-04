function dividirEmGrupos(nomes, tamanhoDoGrupo) {
    for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {
        const grupo = nomes.slice(i, i + tamanhoDoGrupo);
        console.log(`Grupo ${Math.floor(i / tamanhoDoGrupo) + 1}: ${grupo.join(', ')}.`);
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
dividirEmGrupos(nomes, tamanhoDoGrupo);
