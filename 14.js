let numero = prompt("Ingrese un número entero:");

if (isNaN(numero)) {
    alert("Ingrese un valor numérico válido.");
} else {
    let numeroStr = Math.abs(parseInt(numero)).toString();
    let cantidad = numeroStr.length;
    let suma = 0;

    for (let i = 0; i < cantidad; i++) {
        suma += parseInt(numeroStr[i]);
    }

    alert(
        "El número " + numero + " tiene " + cantidad + " dígitos.\n" +
        "La suma de sus dígitos es: " + suma
    );
}
