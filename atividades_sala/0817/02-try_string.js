/*
Crie um programa que recebe do teclado uma string nao numerica em um numero utilizando parseInt dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Conversão inválida" no console.
*/

const readline = require("readline-sync");


try{
    nNumero = parseInt(readline.question("Informe uma palavra: "));
    console.log(typeof(NaN));
    if (isNaN(nNumero)){
        throw Error("Erro: Conversão inválida");
    }
} catch(erro) {
    console.error(erro.message)
}
