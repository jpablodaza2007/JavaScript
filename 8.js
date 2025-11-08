let calculadora_propinas = parseFloat(prompt("Ingrese el monto de la cuenta: ejemplo 25.000 pesos"));
let porcentaje_propina = parseFloat(prompt("Ingrese el porcentaje de propina que desea dejar (10, 15, 20) sin agregar %: "));
if (isNaN(calculadora_propinas) || isNaN(porcentaje_propina)) {
    alert("Por favor ingrese valores numéricos válidos");
} else {
    let propina = (porcentaje_propina / 100) * calculadora_propinas;
    let total_con_propina = calculadora_propinas + propina;
    alert("El monto de la propina es: $" + propina.toFixed(2) + " El total con propina es: $" + total_con_propina.toFixed(2));
}