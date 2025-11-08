let n = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(n) || n < 0) {
    alert("Por favor, ingrese un número válido mayor o igual a 0.");
} else {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    alert("El factorial de " + n + " es: " + factorial);
}
