let cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = prompt("Elemento " + (i + 1) + ":");
    }

    let buscar = prompt("Ingrese el valor a buscar:");
    let reemplazar = prompt("Ingrese el valor de reemplazo:");

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === buscar) {
            arreglo[i] = reemplazar;
        }
    }

    alert("Arreglo actualizado:\n" + arreglo.join(", "));
}
