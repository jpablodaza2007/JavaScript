let n = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(n) || n < 2) {
    alert("Ingrese al menos 2 elementos.");
} else {
    for (let i = 0; i < n; i++) {
        arreglo[i] = parseFloat(prompt("Elemento " + (i + 1) + ":"));
    }

    let objetivo = parseFloat(prompt("Ingrese la suma objetivo:"));
    let pares = [];

    for (let i = 0; i < arreglo.length - 1; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[i] + arreglo[j] === objetivo) {
                pares.push("[" + arreglo[i] + ", " + arreglo[j] + "]");
            }
        }
    }

    if (pares.length === 0) {
        alert("No se encontraron pares que sumen " + objetivo);
    } else {
        alert("Pares que suman " + objetivo + ":\n" + pares.join(", "));
    }
}
