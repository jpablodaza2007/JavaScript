let n1 = parseInt(prompt("Ingrese la cantidad de elementos del primer arreglo:"));
let arreglo1 = [];

if (isNaN(n1) || n1 < 1) {
    alert("Ingrese una cantidad válida de elementos.");
} else {
    for (let i = 0; i < n1; i++) {
        arreglo1[i] = prompt("Primer arreglo - Elemento " + (i + 1) + ":");
    }

    let n2 = parseInt(prompt("Ingrese la cantidad de elementos del segundo arreglo:"));
    let arreglo2 = [];

    if (isNaN(n2) || n2 < 1) {
        alert("Ingrese una cantidad válida de elementos.");
    } else {
        for (let i = 0; i < n2; i++) {
            arreglo2[i] = prompt("Segundo arreglo - Elemento " + (i + 1) + ":");
        }

        let union = Array.from(new Set([...arreglo1, ...arreglo2]));
        let interseccion = arreglo1.filter(elemento => arreglo2.includes(elemento));

        alert("Unión de los arreglos:\n" + union.join(", ") +
              "\n\nIntersección de los arreglos:\n" + interseccion.join(", "));
    }
}
