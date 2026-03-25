function empresaMaer (){
    let ganhoTotal = 0;
    let gastoTotal = 0;

    for (let mes = 1; mes <= 12; mes++){
       let ganho = parseFloat(prompt("Digite o ganho do mês " + mes + ":"));
       let gasto = parseFloat(prompt("Digite o gasto do mês " + mes + ":"));

       if (isNaN(ganho) || isNaN(gasto)) {
           alert("Digite apenas números!");
           mes--; // repete o mês
           continue;
       }

       ganhoTotal += ganho;
       gastoTotal += gasto;
    }

    let saldo = ganhoTotal - gastoTotal;

    console.log("Ganho anual: " + ganhoTotal);
    console.log("Gasto anual: " + gastoTotal);
    console.log("Saldo anual: " + saldo);

    if (saldo > 0) {
        alert("Lucro");
    } else if (saldo < 0) {
        alert("Prejuízo");
    } else {
        alert("Saldo zerado");
    }
}