'use strict'

/*
Mostrar en el navegador todos los números divisores de un número introducido en un prompt.
*/

var numDiv = Number(prompt('introduce el número a dividir'));
var n = 0;

while (n != numDiv){
    n++
    if (numDiv % n === 0){
        document.write(`${n}<br>`);
    };
};