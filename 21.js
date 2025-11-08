
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
    alert("Ingrese números válidos.");
} else {
    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("No se puede dividir entre cero.");
                resultado = null;
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            alert("Operación no válida. Use +, -, *, o /.");
            resultado = null;
    }

    if (resultado !== null) {
        alert("Resultado: " + num1 + " " + operacion + " " + num2 + " = " + resultado);
    }
}
