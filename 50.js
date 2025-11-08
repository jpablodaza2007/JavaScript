let filas = parseInt(prompt("Ingrese el número de filas:"));
let columnas = parseInt(prompt("Ingrese el número de columnas:"));

if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
    alert("Ingrese dimensiones válidas para las matrices.");
} else {
    let matrizA = [];
    let matrizB = [];
    let matrizSuma = [];

    for (let i = 0; i < filas; i++) {
        matrizA[i] = [];
        matrizB[i] = [];
        matrizSuma[i] = [];
        for (let j = 0; j < columnas; j++) {
            matrizA[i][j] = parseFloat(prompt("Matriz A [" + i + "][" + j + "]:"));
            matrizB[i][j] = parseFloat(prompt("Matriz B [" + i + "][" + j + "]:"));
            matrizSuma[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }

    let resultado = "Resultado de la suma de matrices:\n";
    for (let i = 0; i < filas; i++) {
        resultado += matrizSuma[i].join(" ") + "\n";
    }

    alert(resultado);
}
