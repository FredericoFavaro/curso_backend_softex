/*
Com os conceitos aprendidos, crie um programa de calculadora que:
- receba dois valores, que devem ser salvos em variáveis; 
- o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
- com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
- se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.  
*/

const readline = require("readline-sync");

while (true) {
    let num1 = parseFloat(readline.question("Informe o primeiro número: "));
    let num2 = parseFloat(readline.question("Informe o segundo número: "));
    let simbolo = readline.question("Informe qual operação será realizada (1-Soma 2-Subtração 3-Multiplicação 4-Divisão): ");
    switch (simbolo) {
        case "1":
            console.log(`${num1} + ${num2} = ${num1+num2}`);
            return;
        case "2":
            console.log(`${num1} - ${num2} = ${num1-num2}`);
            return;
        case "3":
            console.log(`${num1} x ${num2} = ${num1*num2}`);
            return;
        case "4":
            if (num2 == 0){break}
            console.log(`${num1} / ${num2} = ${Math.floor(num1/num2)}`);
            let sobra = num1%num2;
            if (sobra != 0){console.log(`Sobrou ${sobra} da divisão`);}
            return;
        default:
            console.log("Informe uma operação válida\n");
    }
}
