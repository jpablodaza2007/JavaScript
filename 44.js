let n = parseInt(prompt("Ingrese hasta qué número desea ver los números primos:"));

if (isNaN(n) || n < 2) {
    alert("Por favor, ingrese un número válido mayor o igual a 2.");
} else {
    let primos = "";

    for (let i = 2; i <= n; i++) {
        let esPrimo = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            primos += i + " ";
        }
    }

    alert("Números primos hasta " + n + ":\n" + primos);
}
