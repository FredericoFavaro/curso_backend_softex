// Importando módulo para input do usuário
/*
const readline = require("readline-sync");

function saudacao(variavel, padrao = "ABC"){
    if (padrao == ""){
        padrao = "ABC";
    }
    return padrao;
}

let nome = readline.question("Qual o seu nome? ");

console.log(saudacao(nome));
*/
const readline = require("readline-sync");
function valorPadrao(variavel, padrao){
    if (variavel == ""){
        variavel = padrao;
    }
    return variavel;
}
function saudacao(nome){
    nome = valorPadrao(nome, "ksajfksajf");
    console.log(nome);
}
let nome = readline.question("Qual o seu nome? ");

saudacao(nome);