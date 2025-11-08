let numero = parseInt(prompt("Ingrese un numero par o o impar: "));
if (isNaN(numero)) {
    alert("El valor ingresado no es un numero");
} else {
    if (numero %2 === 0) {
        alert("El numero es par");
    } else {
        alert("El numero es impar");
    }
}