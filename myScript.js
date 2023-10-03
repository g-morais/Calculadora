function calcular() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado;

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Não é possível dividir por zero!");
                return;
            }
            break;
        default:
            alert("Operação inválida!");
            return;
    }

    document.getElementById("resultado").innerHTML = ("o resultado é " + resultado);
}
