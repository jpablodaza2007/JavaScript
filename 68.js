let n = parseInt(prompt("Ingrese la cantidad de elementos de la secuencia:"));
let arreglo = [];

if (isNaN(n) || n < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < n; i++) {
        arreglo[i] = parseInt(prompt("Elemento " + (i + 1) + ":"));
    }

    let min = Math.min(...arreglo);
    let max = Math.max(...arreglo);
    let faltantes = [];

    for (let i = min; i <= max; i++) {
        if (!arreglo.includes(i)) {
            faltantes.push(i);
        }
    }

    if (faltantes.length === 0) {
        alert("No hay elementos faltantes en la secuencia.");
    } else {
        alert("Elementos faltantes en la secuencia:\n" + faltantes.join(", "));
    }
}
