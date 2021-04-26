'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

var num1 = Number(prompt('introduce un primer número'));
var num2 = Number(prompt('introduce un segundo número'));

do {

    num1++

    if (num1/2 === Math.round(num1/2)) {
        document.write(`${num1}<br>`);
    }

}while (num1 != num2);