let n = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(n) || n < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < n; i++) {
        arreglo[i] = parseFloat(prompt("Elemento " + (i + 1) + ":"));
    }

    let maxActual = arreglo[0];
    let maxGlobal = arreglo[0];
    let inicio = 0, fin = 0, tempInicio = 0;

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maxActual + arreglo[i]) {
            maxActual = arreglo[i];
            tempInicio = i;
        } else {
            maxActual += arreglo[i];
        }

        if (maxActual > maxGlobal) {
            maxGlobal = maxActual;
            inicio = tempInicio;
            fin = i;
        }
    }

    let subarray = arreglo.slice(inicio, fin + 1);
    alert("Subarray con suma máxima: [" + subarray.join(", ") + "]\nSuma máxima: " + maxGlobal);
}
