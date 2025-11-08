let cantidad = parseInt(prompt("Ingrese la cantidad de elementos del arreglo:"));
let arreglo = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < cantidad; i++) {
        arreglo[i] = prompt("Elemento " + (i + 1) + ":");
    }

    let k = parseInt(prompt("Ingrese el número de posiciones a rotar:"));
    let direccion = prompt("Ingrese la dirección de rotación (izquierda/derecha):").toLowerCase();

    if (isNaN(k) || k < 0) {
        alert("Ingrese un número válido de posiciones.");
    } else {
        k = k % arreglo.length; 
        if (direccion === "izquierda") {
            for (let i = 0; i < k; i++) {
                let temp = arreglo.shift();
                arreglo.push(temp);
            }
        } else if (direccion === "derecha") {
            for (let i = 0; i < k; i++) {
                let temp = arreglo.pop();
                arreglo.unshift(temp);
            }
        } else {
            alert("Dirección no válida. Use 'izquierda' o 'derecha'.");
        }

        alert("Arreglo rotado:\n" + arreglo.join(", "));
    }
}
