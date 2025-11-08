let opcion = prompt("¿Qué desea calcular? Escriba:\n1 - Velocidad\n2 - Distancia\n3 - Tiempo");

if (opcion === "1") {
    let distancia = parseFloat(prompt("Ingrese la distancia (en metros):"));
    let tiempo = parseFloat(prompt("Ingrese el tiempo (en segundos):"));
    if (isNaN(distancia) || isNaN(tiempo) || tiempo <= 0) {
        alert("Ingrese valores válidos. El tiempo debe ser mayor que cero.");
    } else {
        let velocidad = distancia / tiempo;
        alert("La velocidad es: " + velocidad.toFixed(2) + " m/s");
    }
} else if (opcion === "2") {
    let velocidad = parseFloat(prompt("Ingrese la velocidad (en m/s):"));
    let tiempo = parseFloat(prompt("Ingrese el tiempo (en segundos):"));
    if (isNaN(velocidad) || isNaN(tiempo) || velocidad < 0 || tiempo < 0) {
        alert("Ingrese valores válidos.");
    } else {
        let distancia = velocidad * tiempo;
        alert("La distancia es: " + distancia.toFixed(2) + " metros");
    }
} else if (opcion === "3") {
    let distancia = parseFloat(prompt("Ingrese la distancia (en metros):"));
    let velocidad = parseFloat(prompt("Ingrese la velocidad (en m/s):"));
    if (isNaN(distancia) || isNaN(velocidad) || velocidad <= 0) {
        alert("Ingrese valores válidos. La velocidad debe ser mayor que cero.");
    } else {
        let tiempo = distancia / velocidad;
        alert("El tiempo es: " + tiempo.toFixed(2) + " segundos");
    }
} else {
    alert("Opción no válida. Debe ingresar 1, 2 o 3.");
}
