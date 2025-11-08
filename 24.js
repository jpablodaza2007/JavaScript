let figura = prompt("Ingrese la figura (círculo, triángulo, rectángulo o cuadrado):").toLowerCase();
let area, perimetro;

switch (figura) {
    case "círculo":
    case "circulo":
        let radio = parseFloat(prompt("Ingrese el radio:"));
        if (isNaN(radio) || radio <= 0) {
            alert("Valor inválido para el radio.");
        } else {
            area = Math.PI * Math.pow(radio, 2);
            perimetro = 2 * Math.PI * radio;
            alert(
                "Círculo\nÁrea: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2)
            );
        }
        break;

    case "triángulo":
    case "triangulo":
        let base = parseFloat(prompt("Ingrese la base:"));
        let altura = parseFloat(prompt("Ingrese la altura:"));
        let lado1 = parseFloat(prompt("Ingrese el lado 1:"));
        let lado2 = parseFloat(prompt("Ingrese el lado 2:"));
        let lado3 = parseFloat(prompt("Ingrese el lado 3:"));
        if (isNaN(base) || isNaN(altura) || isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
            alert("Ingrese valores válidos.");
        } else {
            area = (base * altura) / 2;
            perimetro = lado1 + lado2 + lado3;
            alert(
                "Triángulo\nÁrea: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2)
            );
        }
        break;

    case "rectángulo":
    case "rectangulo":
        let largo = parseFloat(prompt("Ingrese el largo:"));
        let ancho = parseFloat(prompt("Ingrese el ancho:"));
        if (isNaN(largo) || isNaN(ancho) || largo <= 0 || ancho <= 0) {
            alert("Ingrese valores válidos.");
        } else {
            area = largo * ancho;
            perimetro = 2 * (largo + ancho);
            alert(
                "Rectángulo\nÁrea: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2)
            );
        }
        break;

    case "cuadrado":
        let lado = parseFloat(prompt("Ingrese el lado:"));
        if (isNaN(lado) || lado <= 0) {
            alert("Ingrese un valor válido para el lado.");
        } else {
            area = Math.pow(lado, 2);
            perimetro = 4 * lado;
            alert(
                "Cuadrado\nÁrea: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2)
            );
        }
        break;

    default:
        alert("Figura no válida. Escriba: círculo, triángulo, rectángulo o cuadrado.");
}
