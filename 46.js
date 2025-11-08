let filas = parseInt(prompt("Ingrese el número de filas:"));
let patron = "";

if (isNaN(filas) || filas < 1) {
    alert("Ingrese un número válido mayor que 0.");
} else {
    for (let i = 1; i <= filas; i++) {
        for (let j = 1; j <= i; j++) {
            patron += "*";
        }
        patron += "\n";
    }

    alert("Patrón generado:\n\n" + patron);
}
