const jogada1 = "pedra";
const jogada2 = "tesoura";

if (jogada1 === jogada2) {
    console.log("Empate!");
} else {
    const resultado =
        (jogada1 === "pedra" && jogada2 === "tesoura") ||
        (jogada1 === "tesoura" && jogada2 === "papel") ||
        (jogada1 === "papel" && jogada2 === "pedra")
            ? "Jogador 1 ganhou!"
            : "Jogador 2 ganhou!";
    
    console.log(resultado);
}
