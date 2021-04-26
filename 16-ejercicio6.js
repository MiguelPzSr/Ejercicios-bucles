'use strict'

/*
Se le pide a un usuario por pantalla (prompt) un número y el programa nos tiene que mostrar si es par o impar.
Si el número introducido no es válido nos pide de nuevo el número.

*/
do{
    var num = Number(prompt('Introduzca un número'));

}while (isNaN(num));

if (num % 2 === 0){
    document.write(`El número ${num} es par`);   
}else{    
    document.write(`El número ${num} es par`);
};