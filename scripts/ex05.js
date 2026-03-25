function transformarNumero() {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    if (!isNaN(numero)) {

        if (numero % 2 === 0) {
            
            numero = numero + 1;
        } else {
            
            numero = numero + 1;
        }

        console.log("Valor final: " + numero);

    } else {
        alert("Por favor, digite um número válido!");
    }
}