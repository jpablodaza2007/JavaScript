let cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = prompt("Elemento " + (i + 1) + ":");
    }

    let invertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);
    }

    alert("Arreglo original:\n" + arreglo.join(", ") +
          "\n\nArreglo invertido:\n" + invertido.join(", "));
}
