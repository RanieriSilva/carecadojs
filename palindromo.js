function isPalindrome() {
    while (true) {
        let input = prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");
        if (!input) {
            alert("Erro: Nenhum valor inserido.");
            continue;
        }

        let normalized = input
            .toLowerCase()
            .normalize("NFD").replace(/[^a-z0-9]/g, ""); // Remove acentos e caracteres especiais

        let reversed = normalized.split('').reverse().join('');
        let isPalindrome = normalized === reversed;

        alert(`A frase/palavra "${input}" ${isPalindrome ? "é um palíndromo" : "não é um palíndromo"}.`);
        console.log(`A frase/palavra "${input}" ${isPalindrome ? "é um palíndromo" : "não é um palíndromo"}.`);
        break;
    }
}

// Chama a função ao carregar o script
isPalindrome();
