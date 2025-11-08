let filasA = parseInt(prompt("Ingrese el número de filas de la matriz A:"));
let columnasA = parseInt(prompt("Ingrese el número de columnas de la matriz A:"));
let filasB = parseInt(prompt("Ingrese el número de filas de la matriz B:"));
let columnasB = parseInt(prompt("Ingrese el número de columnas de la matriz B:"));

if (isNaN(filasA) || isNaN(columnasA) || isNaN(filasB) || isNaN(columnasB) || filasA < 1 || columnasA < 1 || filasB < 1 || columnasB < 1) {
    alert("Ingrese dimensiones válidas para las matrices.");
} else if (columnasA !== filasB) {
    alert("No se pueden multiplicar: el número de columnas de A debe ser igual al número de filas de B.");
} else {
    let matrizA = [];
    let matrizB = [];
    let matrizResultado = [];

    for (let i = 0; i < filasA; i++) {
        matrizA[i] = [];
        for (let j = 0; j < columnasA; j++) {
            matrizA[i][j] = parseFloat(prompt("Matriz A [" + i + "][" + j + "]:"));
        }
    }

    for (let i = 0; i < filasB; i++) {
        matrizB[i] = [];
        for (let j = 0; j < columnasB; j++) {
            matrizB[i][j] = parseFloat(prompt("Matriz B [" + i + "][" + j + "]:"));
        }
    }

    for (let i = 0; i < filasA; i++) {
        matrizResultado[i] = [];
        for (let j = 0; j < columnasB; j++) {
            let suma = 0;
            for (let k = 0; k < columnasA; k++) {
                suma += matrizA[i][k] * matrizB[k][j];
            }
            matrizResultado[i][j] = suma;
        }
    }

    let resultado = "Resultado de la multiplicación de matrices:\n";
    for (let i = 0; i < filasA; i++) {
        resultado += matrizResultado[i].join(" ") + "\n";
    }

    alert(resultado);
}
