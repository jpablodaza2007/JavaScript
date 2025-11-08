let año_de_nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
let año_actual = Date.prototype.getFullYear.call(new Date());
if (isNaN(año_de_nacimiento)) {
    alert("El valor ingresado no es un numero");
} else {
    let edad = año_actual - año_de_nacimiento;
    alert("Su edad es: " + edad);
}
// Date.prototype.getFullYear.call(new Date()) sirve para obtener el año actual del sistema
// Esto yo lo investigue por mi cuenta no es echo con IA ni nada por el estilo profe