let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
let numeros = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de números.");
} else {
    let suma = 0;

    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseFloat(prompt("Número " + (i + 1) + ":"));
        suma += numeros[i];
    }

    let promedio = suma / cantidad;

    alert("Los números ingresados son: " + numeros.join(", ") + "\nPromedio: " + promedio.toFixed(2));
}
