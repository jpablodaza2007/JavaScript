let numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
} else {
    let resultado = "Tabla del " + numero + ":\n\n"; 


    for (let i = 1; i <= 10; i++) {
        resultado += numero + " × " + i + " = " + (numero * i) + "\n";
    }
    alert(resultado);
}

