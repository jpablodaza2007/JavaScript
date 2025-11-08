let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let resultado;
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Error: Debe ingresar números válidos.");
} else {
    if (operacion === "+") {
        resultado = numero1 + numero2;
        alert("El resultado de la suma es: " + resultado);
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
        alert("El resultado de la resta es: " + resultado);
    } else if (operacion === "*") {
        resultado = numero1 * numero2;
        alert("El resultado de la multiplicación es: " + resultado);
    } else if (operacion === "/") {
        if (numero2 === 0) {
            alert("Error: No se puede dividir por cero.");
        } else {
            resultado = numero1 / numero2;
            alert("El resultado de la división es: " + resultado);
        }
    }
}
