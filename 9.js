let numero = parseInt(prompt("Ingrese un numero positivo, negativo o cero: "));
if (isNaN(numero)) {
    alert("El valor ingresado no es un numero");
} else {
    if (numero > 0) {
        alert("El numero es positivo");
    } else if (numero < 0) {
        alert("El numero es negativo");
    } else {
        alert("El numero es cero");
    }
}
