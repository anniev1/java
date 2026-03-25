    function ordenar() {
    let numeros = [];
    let contador = 0;

    while (contador < 4) {
        let numero = parseInt(prompt("Digite um número inteiro:"));

        if (!isNaN(numero)) {
            numeros.push(numero);
            contador++;
        } else {
            alert("Por favor, digite um número válido!");
        }
    }

    numeros.sort(function(a, b) {
        return b - a;
    });

    console.log("Números em ordem decrescente:");
    console.log(numeros);
}