let tipo = prompt("Seleccione el tipo de serie:\n1 - Aritmética\n2 - Geométrica");

let a = parseFloat(prompt("Ingrese el primer término:"));
let n = parseInt(prompt("Ingrese la cantidad de términos:"));
let d = parseFloat(prompt("Ingrese la diferencia o razón:"));

if (isNaN(a) || isNaN(n) || isNaN(d) || n < 1) {
    alert("Por favor, ingrese valores válidos.");
} else {
    let serie = "";

    if (tipo === "1") {
        for (let i = 0; i < n; i++) {
            serie += a + (i * d) + " ";
        }
        alert("Serie aritmética:\n" + serie);
    } else if (tipo === "2") {
        for (let i = 0; i < n; i++) {
            serie += a * Math.pow(d, i) + " ";
        }
        alert("Serie geométrica:\n" + serie);
    } else {
        alert("Opción no válida. Seleccione 1 o 2.");
    }
}
