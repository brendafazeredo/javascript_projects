const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    const numQuestoes = prova.questoes.length;
    let acertos = 0;
    
    for (let i = 0; i < numQuestoes; i++) {
        const questao = prova.questoes[i];
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }
    
    const nota = (acertos / numQuestoes) * prova.valor;
    
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota.toFixed(1)}`);
}

corrigirProva(prova);
