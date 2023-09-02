/*
Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.
*/

// Primeiro código
const readline = require("readline-sync");
let nota = 0;
nota += readline.questionFloat("Informa a primeira nota: ");
nota += readline.questionFloat("Informe a segunda nota: ");
nota += readline.questionFloat("Informe a terceira nota: ");
let media = nota/3

let resultado = (media>=7) ? "Aprovado" : "Reprovado"
console.log(resultado)

// Segundo código
notaMinima = 21;
notaMinima -= readline.questionFloat("Informa a primeira nota: ");
notaMinima -= readline.questionFloat("Informe a segunda nota: ");

console.log(`Voçê precisa tirar no mínimo ${notaMinima}, para passar com média 7!!!`);
