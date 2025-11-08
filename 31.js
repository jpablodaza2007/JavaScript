let ingreso = parseFloat(prompt("Ingrese su ingreso mensual en dólares:"));
let impuesto;

if (isNaN(ingreso) || ingreso < 0) {
    alert("Ingrese un valor válido para el ingreso.");
} else {
    if (ingreso <= 1000) {
        impuesto = ingreso * 0.05;
    } else if (ingreso <= 3000) {
        impuesto = ingreso * 0.10;
    } else if (ingreso <= 5000) {
        impuesto = ingreso * 0.15;
    } else {
        impuesto = ingreso * 0.20;
    }

    let ingresoNeto = ingreso - impuesto;

    alert(
        "Ingreso bruto: $" + ingreso.toFixed(2) +
        "\nImpuesto aplicado: $" + impuesto.toFixed(2) +
        "\nIngreso neto después de impuestos: $" + ingresoNeto.toFixed(2)
    );
}
