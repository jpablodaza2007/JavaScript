let n = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(n) || n < 1) {
    alert("Por favor, ingrese un número válido mayor que 0.");
} else {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma = suma + i;
    }

    alert("La suma de los números del 1 al " + n + " es: " + suma);
}
