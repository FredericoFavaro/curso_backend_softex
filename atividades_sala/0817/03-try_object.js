/*
Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexistente desse objeto dentro de um bloco try...catch. Capture o erro e o exiva "Erro: Propriedade não encontrada" no console
*/
const readline = require("readline-sync");

const pessoa = {nome:, idade:};

pessoa.nome = readline.question("Nome? ")

console.log(pessoa)