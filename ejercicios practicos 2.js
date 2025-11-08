let edad = parseInt(prompt("Ingrese su edad:"));
if (isNaN(edad)) {
    alert("Por favor, ingrese un número válido para la edad.");
} else if (edad >= 18){
    alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}