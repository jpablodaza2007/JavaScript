let numero = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(numero) || numero < 1) {
    alert("Ingrese un número válido mayor que 0.");
} else {
    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        alert("El número " + numero + " es un número perfecto.");
    } else {
        alert("El número " + numero + " no es un número perfecto.");
    }
}
