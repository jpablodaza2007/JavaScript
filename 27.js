let opcion = prompt(
    "Menú del Día:\n1 - Hamburguesa ($15)\n2 - Pizza ($20)\n3 - Ensalada ($12)\n4 - Jugo Natural ($8)"
);

let cantidad = parseInt(prompt("Ingrese la cantidad deseada:"));
let precio, total;

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingrese una cantidad válida.");
} else {
    switch (opcion) {
        case "1":
            precio = 15;
            break;
        case "2":
            precio = 20;
            break;
        case "3":
            precio = 12;
            break;
        case "4":
            precio = 8;
            break;
        default:
            alert("Opción no válida.");
            precio = null;
    }

    if (precio !== null) {
        total = precio * cantidad;
        alert("Pedido: " + cantidad + " unidad(es) de la opción " + opcion + 
              "\nPrecio unitario: $" + precio + 
              "\nTotal a pagar: $" + total);
    }
}
