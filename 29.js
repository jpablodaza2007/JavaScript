let categoria = prompt(
    "Seleccione la categoría del empleado:\n1 - Operario ($15/hora)\n2 - Técnico ($20/hora)\n3 - Gerente ($30/hora)"
);

let horas = parseFloat(prompt("Ingrese el número de horas trabajadas:"));
let tarifaBase, pagoTotal;

if (isNaN(horas) || horas < 0) {
    alert("Ingrese una cantidad de horas válida.");
} else {
    switch (categoria) {
        case "1":
            tarifaBase = 15;
            break;
        case "2":
            tarifaBase = 20;
            break;
        case "3":
            tarifaBase = 30;
            break;
        default:
            alert("Categoría no válida.");
            tarifaBase = null;
    }

    if (tarifaBase !== null) {
        let horasNormales = Math.min(horas, 40);
        let horasExtras = Math.max(horas - 40, 0);
        let pagoNormal = horasNormales * tarifaBase;
        let pagoExtra = horasExtras * tarifaBase * 1.5;
        pagoTotal = pagoNormal + pagoExtra;

        alert(
            "Categoría: " + categoria +
            "\nHoras normales: " + horasNormales +
            "\nHoras extra: " + horasExtras +
            "\nPago total: $" + pagoTotal.toFixed(2)
        );
    }
}
