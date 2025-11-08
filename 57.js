let n = parseInt(prompt("Ingrese la cantidad de términos de la secuencia Fibonacci:"));
let fibonacci = [];

if (isNaN(n) || n < 1) {
    alert("Ingrese un número válido mayor o igual a 1.");
} else {
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    alert("Secuencia Fibonacci (" + n + " términos):\n" + fibonacci.join(", "));
}
