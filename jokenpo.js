function jogarJokenpo() {
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    
    while (true) {
        let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();
        
        if (!escolhaUsuario) {
            alert("Erro: Nenhuma opção inserida.");
            continue;
        }
        
        escolhaUsuario = escolhaUsuario.charAt(0).toUpperCase() + escolhaUsuario.slice(1);
        
        if (!opcoes.includes(escolhaUsuario)) {
            alert("Opção inválida! Escolha entre Pedra, Papel ou Tesoura.");
            continue;
        }

        let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
        
        alert(`Você escolheu: ${escolhaUsuario}\nComputador escolheu: ${escolhaComputador}`);

        if (escolhaUsuario === escolhaComputador) {
            alert("Empate!");
        } else if (
            (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") ||
            (escolhaUsuario === "Papel" && escolhaComputador === "Pedra") ||
            (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel")
        ) {
            alert("Você venceu! 🎉");
        } else {
            alert("Você perdeu! 😢");
        }

        let jogarNovamente = confirm("Deseja jogar novamente?");
        if (!jogarNovamente) break;
    }
}

jogarJokenpo();
