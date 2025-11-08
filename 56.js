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
        if (frecuencia[elemento]) {
            frecuencia[elemento]++;
        } else {
            frecuencia[elemento] = 1;
        }
    }

    let resultado = "Frecuencia de elementos:\n";
    for (let elemento in frecuencia) {
        resultado += elemento + ": " + frecuencia[elemento] + "\n";
    }

    alert(resultado);
}
