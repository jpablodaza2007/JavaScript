let cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = parseFloat(prompt("Elemento " + (i + 1) + ":"));
    }

    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    alert("La suma de todos los elementos es: " + suma);
}
