let palabra = prompt("Ingrese una palabra:").toLowerCase();
let invertida = "";

for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
}

if (palabra === invertida) {
    alert("La palabra '" + palabra + "' es un palíndromo.");
} else {
    alert("La palabra '" + palabra + "' no es un palíndromo.");
}

