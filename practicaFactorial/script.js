function calcularFactorial() {
    var numeroInput = document.getElementById('numero').value;
    var resultadoElement = document.getElementById('resultado');

    /* validamos si el campo esta vacio */
    if (isNaN(numeroInput) || numeroInput === "") {
        resultadoElement.textContent = "Ingresa un número";
        return;
    }
    var numero = parseFloat(numeroInput);

    /* Validamos si el numero ingresado es negativo */
    if (numero < 0 || !Number.isInteger(numero)) {
        resultadoElement.textContent = "Ingresa un número entero, que no sea negativo";
        return;
    }

    // calculamos el factorial 
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }
    /* imprimimos en la tiqueta p el resultado */
    resultadoElement.textContent = "El factorial del numero " + numero + " es: " + factorial;
}
