function verificarComentario(comentario) {
    const palavrasProibidas = ["pandemia", "covid"];
    
    const comentarioLower = comentario.toLowerCase();
    
    for (const palavra of palavrasProibidas) {
        if (comentarioLower.includes(palavra)) {
            return "Comentário bloqueado por conter palavras proibidas!";
        }
    }
    
    return "Comentário autorizado.";
}

const comentario = "Esse COVID é muito perigoso!";

console.log(verificarComentario(comentario));
