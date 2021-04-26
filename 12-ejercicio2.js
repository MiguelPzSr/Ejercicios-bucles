'use strict'

/*
El usuario va introduciendo números por pantalla hasta que introduzca un número negativo,
en ese caso se mostrará el resultado: Mostrar la media y la suma de los números positivos introducidos.
Utilizar un bucle.
*/

var numbers = []


do{
    
    var putNumber = Number(prompt('Introduce una cifra'));
    numbers.push(parseInt(putNumber));

}while (putNumber >= 0);

let suma = numbers.reduce((a, b) => a + b, 0);
let media = suma / numbers.length;

document.write(`Suma resultante : ${suma} <br>`);
document.write(`Media resultante : ${media} <br>`);