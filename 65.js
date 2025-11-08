let filas = parseInt(prompt("Ingrese el número de filas de la matriz:"));
let columnas = parseInt(prompt("Ingrese el número de columnas de la matriz:"));

if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
    alert("Ingrese dimensiones válidas para la matriz.");
} else {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = parseFloat(prompt("Matriz [" + i + "][" + j + "]:"));
        }
    }

    let transpuesta = [];
    for (let i = 0; i < columnas; i++) {
        transpuesta[i] = [];
        for (let j = 0; j < filas; j++) {
            transpuesta[i][j] = matriz[j][i];
        }
    }

    let resultado = "Matriz original:\n";
    for (let i = 0; i < filas; i++) {
        resultado += matriz[i].join(" ") + "\n";
    }

    resultado += "\nMatriz transpuesta:\n";
    for (let i = 0; i < columnas; i++) {
        resultado += transpuesta[i].join(" ") + "\n";
    }

    alert(resultado);
}
