let numero = parseInt(prompt("Ingrese un número entero positivo:"));

if (isNaN(numero) || numero < 0) {
    alert("Por favor, ingrese un número válido mayor o igual a 0.");
} else {
    let invertido = 0;
    let original = numero;

    while (numero > 0) {
        let digito = numero % 10;
        invertido = invertido * 10 + digito;
        numero = Math.floor(numero / 10);
    }

    alert("El número " + original + " invertido es: " + invertido);
}
