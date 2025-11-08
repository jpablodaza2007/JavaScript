let cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = prompt("Elemento " + (i + 1) + ":");
    }

    let buscado = prompt("Ingrese el elemento que desea buscar:");
    let encontrado = false;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === buscado) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("El elemento '" + buscado + "' se encuentra en el arreglo.");
    } else {
        alert("El elemento '" + buscado + "' no está en el arreglo.");
    }
}
