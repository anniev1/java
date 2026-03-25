function soma() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou 'sair' para encerrar):"));
        if (isNaN(numero)) {
            //somar = soma + numero
            console.log(soma);
        } else {
            alert("Por favor, digite um numero válido!");
        }
        continuar = confirm("Deseja continuar somando números?");
    }
    alert("A soma total é: " + soma);
}