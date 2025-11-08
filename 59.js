let limite = parseInt(prompt("Ingrese el límite hasta el cual desea encontrar números primos:"));

if (isNaN(limite) || limite < 2) {
    alert("Ingrese un número válido mayor o igual a 2.");
} else {
    let primos = [];
    for (let i = 2; i <= limite; i++) {
        primos[i] = true;
    }

    for (let i = 2; i <= Math.sqrt(limite); i++) {
        if (primos[i]) {
            for (let j = i * i; j <= limite; j += i) {
                primos[j] = false;
            }
        }
    }

    let resultado = "Números primos hasta " + limite + ":\n";
    for (let i = 2; i <= limite; i++) {
        if (primos[i]) {
            resultado += i + " ";
        }
    }

    alert(resultado);
}
