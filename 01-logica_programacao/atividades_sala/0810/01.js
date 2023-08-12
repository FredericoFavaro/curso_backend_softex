// Funções sem retorno com valores padrão

// Importando módulo para input do usuário
const readline = require("readline-sync");

// Funcao para converter string vazia em nao definida. Util para usar variavel padrao em funcoes
function naoDefinido(string){
    if (string == ""){
        return string = undefined;
    }
}
// 1 - Crie uma função chamada saudacao que aceita um parametro nome para uma pessoa e exiba no console a saudacao "Ola, [nome]!" utilizando um valor padrao para nome caso nenhum seja fornecido.
function saudacao(nome="Fred"){
    console.log(nome);
}

let name = readline.question("Qual o seu nome? ")
console.log(name);
typeof(name);
//naoDefinido(name);
if (name == " "){
    return string = undefined;
}
saudacao(name)

// 2 - Escreva uma função chamada calculadora que receba dois numeros (num1 e num2) e um pérador matematico (operacao) como parametos. A função deve retornar a operacao matematica entre num1 e num2 (por exemplo, adição, subtração, multiplicação, divisão) com um valor padrao de operacao sendo "+".
function calculadora(num1, num2, operacao="+"){
    if (isNaN(num1) == false || isNaN(num2) == false){
        switch (operacao){
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            default:
                return "Valores inválidos";
        }
    } else {
        return "Valores informados para os numeros não são válidos!"
    }
}

let num1 = parseFloat(readline.question("Informe o primeiro número: "));
let num2 = parseFloat(readline.question("Informe o segundo número: "));
let operacao = readline.question("Qual operação deseja realizar:\n + = soma\n - = subtração\n * = multiplicação\n / = divisão\n");
naoDefinido(operacao)
console.log(typeof(operacao), operacao)
console.log(calculadora(num1,num2,operacao))

// !!!! ao usar o readline sem informar valores, retorna uma string vazia, por isso o valor padrao da função não funciona !!!!

// 3 - Crie uma funcao chamada contagemRegressiva que aceite um parametro inicio para iniciar a contagem regrressiva. A função deve exibir no console uma cantagem regressiva a partir do numero fornecido ate 1, utilizando um valor padrao de inicio igual a 10.
function contagemRegressiva(inicio=10){

}