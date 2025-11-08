let numero = parseInt(prompt("Ingrese un número entero:"));
let fin = parseInt(prompt("Ingrese el número final:"));
if (isNaN(numero) || isNaN(fin)) {
    alert("Ingrese un número válido");
}

for (let i = 1; i <= fin; i++) {
    numero = numero + numero;
    alert(numero);
}
