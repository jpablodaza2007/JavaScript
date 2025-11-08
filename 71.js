let cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes:"));
let estudiantes = [];

if (isNaN(cantidad) || cantidad < 1) {
    alert("Ingrese una cantidad válida de estudiantes.");
} else {
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt("Nombre del estudiante " + (i + 1) + ":");
        let edad = parseInt(prompt("Edad de " + nombre + ":"));
        let calificacion = parseFloat(prompt("Calificación de " + nombre + ":"));
        estudiantes.push({ nombre, edad, calificacion });
    }

    let criterio = prompt("Ordenar por criterio:\n1 - Nombre\n2 - Edad\n3 - Calificación");

    if (criterio === "1") {
        estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (criterio === "2") {
        estudiantes.sort((a, b) => a.edad - b.edad);
    } else if (criterio === "3") {
        estudiantes.sort((a, b) => b.calificacion - a.calificacion);
    } else {
        alert("Criterio no válido, se mantiene el orden original.");
    }

    let resultado = "Estudiantes ordenados:\n";
    estudiantes.forEach(e => {
        resultado += e.nombre + " - Edad: " + e.edad + " - Calificación: " + e.calificacion + "\n";
    });

    alert(resultado);
}
