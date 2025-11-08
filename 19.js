let capital = parseFloat(prompt("Ingrese el capital inicial:"));
let tasa = parseFloat(prompt("Ingrese la tasa de interés (en porcentaje):"));
let tiempo = parseFloat(prompt("Ingrese el tiempo (en años):"));

if (isNaN(capital) || isNaN(tasa) || isNaN(tiempo) || capital < 0 || tasa < 0 || tiempo < 0) {
    alert("Ingrese valores válidos. Ningún valor puede ser negativo.");
} else {
    let interes = capital * (tasa / 100) * tiempo;
    let montoFinal = capital + interes;

    alert(
        "Resultados:\n" +
        "Capital inicial: $" + capital.toFixed(2) + "\n" +
        "Tasa de interés: " + tasa + "%\n" +
        "Tiempo: " + tiempo + " años\n" +
        "Interés generado: $" + interes.toFixed(2) + "\n" +
        "Monto final: $" + montoFinal.toFixed(2)
    );
}
