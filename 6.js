let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));
if (isNaN(peso) || isNaN(altura)) {
    alert("Ingrese valores válidos.");
} else {
    let imc = peso / (altura * altura);
    alert("Su índice de masa corporal (IMC) es: " + imc.toFixed(2));

    if (imc < 18.5) {
        alert("Categoría: Bajo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        alert("Categoría: Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        alert("Categoría: Sobrepeso");
    } else {
        alert("Categoría: Obesidad");
    }
} 
