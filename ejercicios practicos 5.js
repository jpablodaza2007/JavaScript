let numero = parseInt(prompt("Ingrese un numero para verificar si es par o impar:"));
if (isNaN(numero)) {
    alert("Por favor ingrese un numero válido.");
} else {
    if (numero % 2 === 0) {
        alert(numero + " es un número par.");
    } else {
        alert(numero + " es un número impar.");
    }
    
}
