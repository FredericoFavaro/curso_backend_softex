/*
Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser informados pelo usuária. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(), catch() e finally() para realizar a captura e o tratamento dessa exceção.
*/

const readline = require("readline-sync");

let num1 = readline.questionFloat("Informe o primeiro número: ");
let num2 = readline.questionFloat("Informe o segundo número: ");

// Como o JavaScript nao trata divisao por zero como um erro, retornando "Infinity" como resultado da operacao. Foi usado um if para testar se o divisor e zero, se sim, o erro e forcado com o "throw new Error".
try {
    if (num2 === 0) {
        throw new Error("Erro: Divisão por zero!");
    }
    divisao = num1 / num2;
    console.log(divisao);
} catch (error) {
    console.error(error.message);
}

