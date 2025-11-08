let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();
let opciones = ["piedra", "papel", "tijera"];
let computadora = opciones[Math.floor(Math.random() * 3)];

if (!opciones.includes(jugador)) {
    alert("Opción no válida. Debe elegir piedra, papel o tijera.");
} else {
    alert("La computadora eligió: " + computadora);

    if (jugador === computadora) {
        alert("Empate. Ambos eligieron " + jugador + ".");
    } else if (
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
    ) {
        alert("Ganaste. " + jugador + " vence a " + computadora + ".");
    } else {
        alert("Perdiste. " + computadora + " vence a " + jugador + ".");
    }
}
