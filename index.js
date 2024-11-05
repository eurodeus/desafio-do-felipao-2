calcularRanking(55, 40)

function calcularRanking(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    
    // Determinando o nível do jogador com base nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Exibindo a mensagem final com o saldo de vitórias e o nível
    console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)
}