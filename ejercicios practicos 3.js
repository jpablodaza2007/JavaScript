let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let tipoConversion = prompt("¿Desea convertir a Fahrenheit (F) o Celsius (C)?").toUpperCase();
let resultado;
if (isNaN(temperatura)) {
    alert("Ingrese una temperatura válida.");
} else {
    if (tipoConversion === "F") {
        resultadoconversion = (temperatura * 9/5) + 32;
        alert(temperatura + "°C son " + resultadoconversion.toFixed(2) + "°F");
    
}  else if (tipoConversion === "C") {
    resultadoconversion = (temperatura - 32) * 5/9;
    alert(temperatura + "°F son " + resultadoconversion.toFixed(2) + "°C");
} else {
    alert("Tipo de conversión no válido.");
}
   }
