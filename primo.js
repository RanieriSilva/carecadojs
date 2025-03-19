function isPrime() {
    while (true) {
        let input = prompt("Digite um número inteiro para verificar se é primo:");
        if (!input) {
            alert("Erro: Nenhum valor inserido.");
            continue;
        }
        
        let num = Number(input.trim());
        
        if (isNaN(num) || !Number.isInteger(num) || num < 2) {
            alert("Erro: Insira um número inteiro maior ou igual a 2.");
            continue;
        }
        
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        alert(`O número ${num} ${isPrime ? "é primo" : "não é primo"}.`);
        console.log(`O número ${num} ${isPrime ? "é primo" : "não é primo"}.`);
        break;
    }
}

isPrime();
