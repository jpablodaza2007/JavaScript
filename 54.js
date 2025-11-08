let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
let numeros = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de números.");
} else {
    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseFloat(prompt("Número " + (i + 1) + ":"));
    }

    let maximo = numeros[0];
    let minimo = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }

    alert("Máximo: " + maximo + "\nMínimo: " + minimo);
}
