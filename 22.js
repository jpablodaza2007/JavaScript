let numero = parseInt(prompt("Ingrese un número del 1 al 7 para saber el día de la semana:"));
let mensaje;

switch (numero) {
    case 1:
        mensaje = "Lunes - Inicio de la semana laboral";
        break;
    case 2:
        mensaje = "Martes - Segundo día hábil";
        break;
    case 3:
        mensaje = "Miércoles - Mitad de semana";
        break;
    case 4:
        mensaje = "Jueves - Casi fin de semana";
        break;
    case 5:
        mensaje = "Viernes - Último día laboral";
        break;
    case 6:
        mensaje = "Sábado - Primer día de descanso";
        break;
    case 7:
        mensaje = "Domingo - Último día del fin de semana";
        break;
    default:
        mensaje = "Número inválido. Debe ingresar un valor entre 1 y 7.";
}

alert(mensaje);
