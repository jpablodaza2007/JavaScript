let limite = parseInt(prompt("ingrese el numero para contar asta el:"))
if (isNaN(limite)) {
    alert("Por favor ingrese un número válido.");
} else {
    let mensaje = "contando:\n";
    for (let i = 1;i <= limite; i++) {
        mensaje += i + "\n";
    }
    alert(mensaje);
}