/*
Tabla de multiplicar de un número introducido por pantalla
*/

var multNum = Number(prompt('¿Cual es la tabla de multiplicar que desea?'));
var multiplicador = 0;

document.write(`Tabla de multiplicar del número ${multNum} <br>`)
while (multiplicador != 11){
    var multiplicacion = multNum * multiplicador;

    document.write(`${multNum} X ${multiplicador} = ${multiplicacion} <br>`);

    multiplicador++;
}