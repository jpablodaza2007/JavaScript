let n1 = parseInt(prompt("Ingrese la cantidad de elementos del primer arreglo (ordenado):"));
let arreglo1 = [];

if (isNaN(n1) || n1 < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < n1; i++) {
        arreglo1[i] = parseFloat(prompt("Primer arreglo - Elemento " + (i + 1) + ":"));
    }

    let n2 = parseInt(prompt("Ingrese la cantidad de elementos del segundo arreglo (ordenado):"));
    let arreglo2 = [];

    if (isNaN(n2) || n2 < 1) {
        alert("Ingrese una cantidad válida de elementos.");
    } else {
        for (let i = 0; i < n2; i++) {
            arreglo2[i] = parseFloat(prompt("Segundo arreglo - Elemento " + (i + 1) + ":"));
        }

        let i = 0, j = 0;
        let combinado = [];

        while (i < arreglo1.length && j < arreglo2.length) {
            if (arreglo1[i] <= arreglo2[j]) {
                combinado.push(arreglo1[i]);
                i++;
            } else {
                combinado.push(arreglo2[j]);
                j++;
            }
        }

        while (i < arreglo1.length) {
            combinado.push(arreglo1[i]);
            i++;
        }

        while (j < arreglo2.length) {
            combinado.push(arreglo2[j]);
            j++;
        }

        alert("Arreglo combinado ordenado:\n" + combinado.join(", "));
    }
}
