/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/

var readline = require("readline-sync");
var nomeCompleto, anoNascimento, idade;
function calculadoraIdade(){
    while(true){
        try{
            nomeCompleto = readline.question("Qual o seu nome? ");
            anoNascimento = parseInt(readline.question("Em que ano você nasceu? "));
            if (isNaN(anoNascimento) == false && anoNascimento >= 1922 && anoNascimento <= 2021) {
                idade = 2022 - anoNascimento;
                console.log(`${nomeCompleto}, em 2022, você tem/terá ${idade} anos`);
                break;
            } else {
                throw new Error("Valor informado no ano de nascimento não é válido");
            }
        } catch(error){
            console.error("ERRO:",error.message);
            console.log("Tente novamente\n");
        }
    } 
}

calculadoraIdade()
