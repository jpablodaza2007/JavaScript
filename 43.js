let n = parseInt(prompt("Ingrese hasta qué número desea ver los pares:"));

if (isNaN(n) || n < 2) {
    alert("Por favor, ingrese un número válido mayor o igual a 2.");
} else {
    let pares = "";

    for (let i = 2; i <= n; i += 2) {
        pares += i + " ";
    }

    alert("Números pares hasta " + n + ":\n" + pares);
}
