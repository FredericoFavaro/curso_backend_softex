/*
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 
*/


var pergunta = require("readline-sync");
var operacao
var operacao_lista = [1,2,3,4];

// Essa função deveria usar um operador matemático como parametro e ser usado para realizar o calculo, mas por algum motivo da erro quando chamo o parametro.
//function calculadora(operacao){
//    num1 = pergunta.questionFloat("Informe o primeiro número:\n");
//    num2 = pergunta.questionFloat("Informe o segundo número:\n");
//    return num1 operacao num2;
//}


console.log("________________CALCULADORA PLUS PLUS________________\n")
while (operacao != 0){
    console.log("Escolha uma operação de acordo com o menu")
    operacao = parseInt(pergunta.question("1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair\n"))
    if (operacao == 0){
        break;
    }
    if (operacao_lista.includes(operacao) == false){
        console.log("\nERRO: Essa opção não existe\n")
        continue;
    }
    var num1 = pergunta.questionFloat("Informe o primeiro número:\n");
    var num2 = pergunta.questionFloat("Informe o segundo número:\n");
    switch (operacao){
        case 1:
            console.log(num1 + num2);
            break;
        case 2:
            console.log(num1 - num2);
            break
        case 3:
            console.log(num1 * num2);
            break
        case 4:
            console.log(num1 / num2);
            break
    }
}