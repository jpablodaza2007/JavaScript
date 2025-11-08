let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (%):"));
if (isNaN(precio) || isNaN(descuento)) {
    alert("Ingrese datos validos")
}


let montoDescuento = precio * (descuento / 100);

let precioFinal = precio - montoDescuento;
alert("Su producto de precio " + precio + "$ con descuento " + descuento+ "% es un total de " + precioFinal )

