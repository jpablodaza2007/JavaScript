let texto = prompt("Ingrese una palabra o frase:").toLowerCase();
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contador++;
    }
}

alert("La frase contiene " + contador + " vocal(es).");
