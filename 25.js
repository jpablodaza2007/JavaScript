let opcion = prompt(
    "Seleccione una conversión:\n1 - Metros a Pies\n2 - Kilogramos a Libras\n3 - Litros a Galones"
);

let valor = parseFloat(prompt("Ingrese el valor a convertir:"));
let resultado;

if (isNaN(valor) || valor < 0) {
    alert("Ingrese un valor numérico válido y positivo.");
} else {
    switch (opcion) {
        case "1":
            resultado = valor * 3.28084;
            alert(valor + " metros equivalen a " + resultado.toFixed(2) + " pies.");
            break;
        case "2":
            resultado = valor * 2.20462;
            alert(valor + " kilogramos equivalen a " + resultado.toFixed(2) + " libras.");
            break;
        case "3":
            resultado = valor * 0.264172;
            alert(valor + " litros equivalen a " + resultado.toFixed(2) + " galones.");
            break;
        default:
            alert("Opción no válida. Debe elegir 1, 2 o 3.");
    }
}
