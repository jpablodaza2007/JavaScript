let cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(cantidad) || cantidad < 2) {
    alert("Ingrese una cantidad válida (mínimo 2 elementos).");
} else {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = parseFloat(prompt("Elemento " + (i + 1) + ":"));
    }

    for (let i = 0; i < cantidad - 1; i++) {
        for (let j = 0; j < cantidad - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }

    alert("Arreglo ordenado: " + arreglo.join(", "));
}
