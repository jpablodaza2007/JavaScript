let nota = parseFloat(prompt("Ingrese la puntuación del estudiante (0-100):"));
let calificacion;

if (isNaN(nota) || nota < 0 || nota > 100) {
    alert("Ingrese una puntuación válida entre 0 y 100.");
} else {
    if (nota >= 90) {
        calificacion = "A";
    } else if (nota >= 80) {
        calificacion = "B";
    } else if (nota >= 70) {
        calificacion = "C";
    } else if (nota >= 60) {
        calificacion = "D";
    } else {
        calificacion = "F";
    }

    alert("La calificación equivalente es: " + calificacion);
}
