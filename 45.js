let opcion = prompt("Seleccione un patrón:\n1 - Triángulo\n2 - Pirámide\n3 - Rombo");
let filas = parseInt(prompt("Ingrese el número de filas:"));
let patron = "";

if (isNaN(filas) || filas < 1) {
    alert("Ingrese un número válido de filas.");
} else {
    switch (opcion) {
        case "1":
            for (let i = 1; i <= filas; i++) {
                patron += "*".repeat(i) + "\n";
            }
            alert("Triángulo:\n\n" + patron);
            break;

        case "2":
            for (let i = 1; i <= filas; i++) {
                patron += " ".repeat(filas - i) + "*".repeat(2 * i - 1) + "\n";
            }
            alert("Pirámide:\n\n" + patron);
            break;

        case "3":
            for (let i = 1; i <= filas; i++) {
                patron += " ".repeat(filas - i) + "*".repeat(2 * i - 1) + "\n";
            }
            for (let i = filas - 1; i >= 1; i--) {
                patron += " ".repeat(filas - i) + "*".repeat(2 * i - 1) + "\n";
            }
            alert("Rombo:\n\n" + patron);
            break;

        default:
            alert("Opción no válida. Seleccione 1, 2 o 3.");
    }
}
