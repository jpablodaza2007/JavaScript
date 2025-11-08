let cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = prompt("Elemento " + (i + 1) + ":");
    }

    let frecuencia = {};
    for (let i = 0; i < arreglo.length; i++) {
        let elemento = arreglo[i];
        frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;
    }

    let unicos = [];
    for (let elemento in frecuencia) {
        if (frecuencia[elemento] === 1) {
            unicos.push(elemento);
        }
    }

    alert("Elementos únicos en el arreglo:\n" + unicos.join(", "));
}
