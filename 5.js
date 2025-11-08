let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let tipoConversion = prompt("¿Desea convertir a Fahrenheit (F) o Celsius (C)?").toUpperCase();
let resultado;
if (isNaN(temperatura)) {
    alert("Ingrese una temperatura válida.");
} else {
    if (tipoConversion === "F") {
        resultado = (temperatura * 9/5) + 32;
        alert(temperatura + "°C son " + resultado.toFixed(2) + "°F");
    } else if (tipoConversion === "C") {
        resultado = (temperatura - 32) * 5/9;
        alert(temperatura + "°F son " + resultado.toFixed(2) + "°C");
    } else {
        alert("Tipo de conversión no válida.");
    }
}

// toUpperCase() convierte cualquier letra minuscula a mayuscula para evitar errores al ingresar el dato 
// toFixed(2) limita el numero de decimales a 2 en el resultado final