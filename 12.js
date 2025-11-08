let numeroprimo = parseInt(prompt("Ingrese un número para verificar si es primo:"));

if (isNaN(numeroprimo) || numeroprimo < 2) {
    alert("Ingrese un número válido mayor o igual a 2.");
} else {
    let esPrimo = true;

    for (let i = 2; i < numeroprimo; i++) {
        if (numeroprimo % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        alert(numeroprimo + " es un número primo.");
    } else {
        alert(numeroprimo + " no es un número primo.");
    }
}