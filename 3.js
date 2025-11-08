let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
let numero3 = parseInt(prompt("Ingrese el tercer numero: "));
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Algun valor ingresado no es un numero");
} else {
    let mayor = numero1;
    if (numero2 > mayor && numero2 > numero3) {
        mayor = numero2;
    } else if (numero3 > mayor && numero3 > numero2) {
        mayor = numero3;
    }
    alert("El numero mayor es: " + mayor);
}
// las && y sirven para hacer operaciones logicas entre dos o mas condiciones es mas sencillo asi 