function sumArray() {
    while (true) {
        let input = prompt("Digite os números separados por vírgula:");
        if (!input) {
            alert("Erro: Nenhum valor inserido.");
            continue;
        }
        
        let numbers = input.split(",").map(num => num.trim());
        let parsedNumbers = numbers.map(Number);
        
        if (parsedNumbers.some(isNaN)) {
            alert("Erro: Insira apenas números válidos.");
            continue;
        }
        
        let sum = parsedNumbers.reduce((acc, num) => acc + num, 0);
        alert("A soma dos números é: " + sum);
        console.log("A soma dos números é:", sum);
        break;
    }
}

sumArray();
