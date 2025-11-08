let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número (veces que se repetirá):"));

if (isNaN(numero1) || isNaN(numero2) || numero2 < 0) {
    alert("Ingrese valores válidos. El segundo número debe ser un entero positivo.");
} else {
    let resultado = 0;

    for (let i = 0; i < numero2; i++) {
        resultado += numero1;
    }

    alert(
        "Resultado de la multiplicación iterativa:\n" +
        numero1 + " x " + numero2 + " = " + resultado
    );
}

