/*
Crie um programa que contenha os seguintes tipos de funções: 

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro; 
2. uma função tradicional com parâmetros e um retorno de valor; 
3. uma arrow function com parâmetros e que retorne um valor. 

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora. 
*/

// Ficou redundante, mas atende a proposta do exercício.
const readline = require("readline-sync");

function main(){
    console.log("===== Calculadora =====\n");
    let num1 = parseFloat(readline.question("Informe o primeiro número: "));
    let num2 = parseFloat(readline.question("Informe o segundo número: "));
    let simbolo = readline.question("Informe qual operação será realizada: ");
    return calculadora(num1,num2,simbolo);
}

function calculadora(num1,num2,simbolo){
    let operadores = ["-","+","*","/"];
    if (operadores.includes(simbolo)) {
        return `${num1} ${simbolo} ${num2} = ` + eval(`${num1} ${simbolo} ${num2}`);
    } else {
        return msg(simbolo);
    }
}

msg = (simbolo)=>`O simbolo usado (${simbolo}), não é válido!`;

console.log(main())



