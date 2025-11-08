let n = parseInt(prompt("Ingrese el tamaño de la matriz cuadrada:"));

if (isNaN(n) || n < 1) {
    alert("Ingrese un tamaño válido.");
} else {
   
    let identidad = [];
    for (let i = 0; i < n; i++) {
        identidad[i] = [];
        for (let j = 0; j < n; j++) {
            identidad[i][j] = (i === j ? 1 : 0);
        }
    }

 
    let simetrica = true;
    for (let i = 0; i < n && simetrica; i++) {
        for (let j = 0; j < n; j++) {
            if (identidad[i][j] !== identidad[j][i]) {
                simetrica = false;
                break;
            }
        }
    }


    let rotada = [];
    for (let i = 0; i < n; i++) {
        rotada[i] = [];
        for (let j = 0; j < n; j++) {
            rotada[i][j] = identidad[n - j - 1][i];
        }
    }

    let resultado = "Matriz identidad:\n";
    identidad.forEach(fila => resultado += fila.join(" ") + "\n");
    resultado += "\nEs simétrica: " + (simetrica ? "Sí" : "No") + "\n";
    resultado += "\nMatriz rotada 90°:\n";
    rotada.forEach(fila => resultado += fila.join(" ") + "\n");

    alert(resultado);
}
