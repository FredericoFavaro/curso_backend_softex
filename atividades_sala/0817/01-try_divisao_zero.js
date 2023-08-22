/*
Crie um programa que recebe do teclado um numero q tenta dividir por zero dentrp de um bloco try...catch. Capture p errp e p exoba "Erro: Divisão por zero" no console
*/

const readline = require("readline-sync");

num = parseFloat(readline.question("Informe um número para dividir: "));
try {
    divisao = num/0;
    throw Error("Erro: Divisão por zero"); // como js não manda erro na divisao por zero, é necessario forçar o erro.
}catch(ex){
    console.error("Erro: Divisão por zero");
}
