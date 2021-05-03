'use strict'

/*
Hacer una calculadora que pida dos números por pantalla.
Si metemos uno mal que nos los vuelva a pedir.
En el cuerpo de la página y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras.
*/

do{
    var n1 = Number(prompt('inserte el primer número'));
    
}while (isNaN(n1));

do{
    var n2 = Number(prompt('inserte el segundo número'));

}while (isNaN(n2));

var suma = n1 + n2;
var resta = n1 - n2;
var multiplicacion = n1 * n2;
var division = n1 / n2;

document.write(`Suma=${suma}<br>Resta=${resta}<br>Multiplicación=${multiplicacion}<br>División=${division}<br>`)