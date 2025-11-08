let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));

if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
    alert("Ingrese valores válidos. Ambos deben ser números enteros positivos.");
} else {
    let a = num1;
    let b = num2;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    let mcd = a;
    let mcm = (num1 * num2) / mcd;

    alert(
        "Números: " + num1 + " y " + num2 + "\n" +
        "Máximo Común Divisor (MCD): " + mcd + "\n" +
        "Mínimo Común Múltiplo (MCM): " + mcm
    );
}
