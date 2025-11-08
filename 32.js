let opcion = prompt(
    "Seleccione una opción:\n1 - Clasificador de triángulos\n2 - Sistema de transporte\n3 - Conversor numérico"
);

switch (opcion) {
    case "1":
        let a = parseFloat(prompt("Ingrese el primer lado del triángulo:"));
        let b = parseFloat(prompt("Ingrese el segundo lado del triángulo:"));
        let c = parseFloat(prompt("Ingrese el tercer lado del triángulo:"));

        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
            alert("Lados inválidos.");
        } else if (a === b && b === c) {
            alert("El triángulo es equilátero.");
        } else if (a === b || a === c || b === c) {
            alert("El triángulo es isósceles.");
        } else {
            alert("El triángulo es escaleno.");
        }
        break;

    case "2":
        let tipo = prompt("Tipo de transporte:\n1 - Bus ($2/km)\n2 - Taxi ($5/km)\n3 - Tren ($3/km)");
        let distancia = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));
        let tarifa;

        if (isNaN(distancia) || distancia <= 0) {
            alert("Distancia inválida.");
        } else {
            switch (tipo) {
                case "1":
                    tarifa = 2;
                    break;
                case "2":
                    tarifa = 5;
                    break;
                case "3":
                    tarifa = 3;
                    break;
                default:
                    alert("Tipo de transporte no válido.");
                    tarifa = null;
            }
            if (tarifa !== null) {
                let total = tarifa * distancia;
                alert("El costo total del viaje es: $" + total.toFixed(2));
            }
        }
        break;

    case "3":
        let numero = parseInt(prompt("Ingrese un número entero positivo:"));
        if (isNaN(numero) || numero < 0) {
            alert("Número inválido.");
        } else {
            let binario = numero.toString(2);
            let octal = numero.toString(8);
            let hexadecimal = numero.toString(16).toUpperCase();
            alert(
                "Número decimal: " + numero +
                "\nBinario: " + binario +
                "\nOctal: " + octal +
                "\nHexadecimal: " + hexadecimal
            );
        }
        break;

    default:
        alert("Opción no válida. Seleccione 1, 2 o 3.");
}
