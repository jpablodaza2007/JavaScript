let año_bisisesto = parseInt(prompt("Ingrese un año para verificar si es bisiesto: "));
if (isNaN(año_bisisesto)) {
    alert("El valor ingresado no es un numero");
} else {
    if ((año_bisisesto % 4 === 0 && año_bisisesto % 100 !== 0) || (año_bisisesto % 400 === 0)) {
        alert("El año " + año_bisisesto + " es bisiesto");
    } else {
        alert("El año " + año_bisisesto + " no es bisiesto");
    }
}