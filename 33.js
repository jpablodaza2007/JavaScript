let opcion = prompt(
    "Seleccione una aplicación:\n1 - Calculadora científica\n2 - Sistema de puntos de lealtad\n3 - Conversor de tiempo"
);

switch (opcion) {
    case "1":
        let operacion = prompt("Seleccione una operación:\n1 - Potencia\n2 - Raíz cuadrada\n3 - Seno\n4 - Coseno");
        let numero = parseFloat(prompt("Ingrese el número:"));
        let resultado;

        if (isNaN(numero)) {
            alert("Ingrese un número válido.");
        } else {
            switch (operacion) {
                case "1":
                    let exponente = parseFloat(prompt("Ingrese el exponente:"));
                    resultado = Math.pow(numero, exponente);
                    alert("Resultado: " + resultado);
                    break;
                case "2":
                    resultado = Math.sqrt(numero);
                    alert("Resultado: " + resultado);
                    break;
                case "3":
                    resultado = Math.sin(numero);
                    alert("Resultado: " + resultado.toFixed(4));
                    break;
                case "4":
                    resultado = Math.cos(numero);
                    alert("Resultado: " + resultado.toFixed(4));
                    break;
                default:
                    alert("Opción no válida.");
            }
        }
        break;

    case "2":
        let compra = parseFloat(prompt("Ingrese el valor de la compra:"));
        if (isNaN(compra) || compra < 0) {
            alert("Valor inválido.");
        } else {
            let puntos;
            if (compra < 50) {
                puntos = 5;
            } else if (compra < 100) {
                puntos = 10;
            } else if (compra < 200) {
                puntos = 20;
            } else {
                puntos = 30;
            }
            alert("Compra: $" + compra.toFixed(2) + "\nPuntos obtenidos: " + puntos);
        }
        break;

    case "3":
        let tipo = prompt("Seleccione conversión:\n1 - Segundos a minutos\n2 - Minutos a horas\n3 - Horas a segundos");
        let valor = parseFloat(prompt("Ingrese el valor a convertir:"));
        if (isNaN(valor) || valor < 0) {
            alert("Valor inválido.");
        } else {
            let convertido;
            switch (tipo) {
                case "1":
                    convertido = valor / 60;
                    alert(valor + " segundos = " + convertido.toFixed(2) + " minutos.");
                    break;
                case "2":
                    convertido = valor / 60;
                    alert(valor + " minutos = " + convertido.toFixed(2) + " horas.");
                    break;
                case "3":
                    convertido = valor * 3600;
                    alert(valor + " horas = " + convertido + " segundos.");
                    break;
                default:
                    alert("Opción no válida.");
            }
        }
        break;

    default:
        alert("Opción no válida. Seleccione 1, 2 o 3.");
}
