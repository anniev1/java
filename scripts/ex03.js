function empresaMaer (){
    let ganhoTotal = 0;
    let gastoTotal = 0;

    for (let mes = 1; mes <= 12; mes++){
        let ganho = parseFloat(prompt("Digite o ganho do mês " + mes + ":"));
        let gasto = parseFloat(prompt("Digite o gasto do mês " + mes + ":"));

        ganhoTotal += ganho;
        gastoTotal += gasto;
    }

    let saldo = ganhoTotal - gastoTotal;

    console.log("Ganho bruto anual: " + ganhoTotal);
    console.log("Gasto anual: " + gastoTotal);
    console.log("Saldo financeiro anual: " + saldo);

    if (saldo > 0) {
        alert("A empresa teve lucro");
    } else if (saldo < 0) {
        alert("A empresa teve prejuízo");
    } else {
        alert("A empresa não teve lucro nem prejuízo");
    }
}
