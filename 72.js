let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
let numeros = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de números.");
} else {
    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseFloat(prompt("Número " + (i + 1) + ":"));
    }

    let mayoresQueCero = numeros.filter(n => n > 0);
    let cuadrados = numeros.map(n => n * n);
    let sumaTotal = numeros.reduce((acc, n) => acc + n, 0);

    let resultado = "Números originales: " + numeros.join(", ") +
                    "\nNúmeros mayores que 0: " + mayoresQueCero.join(", ") +
                    "\nCuadrados: " + cuadrados.join(", ") +
                    "\nSuma total: " + sumaTotal;

    alert(resultado);
}
