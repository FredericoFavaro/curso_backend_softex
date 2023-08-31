/*
Instruções
A atividade que faremos é a da "calculadora de média". Para isso você deve criar um programa JavaScript que calcule a média de trės notas inseridas pelo usuário e exiba o resultado no console. Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em
variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log).
*/

const readline = require("readline-sync");
let nota1, nota2, nota3, media;

nota1 = readline.questionFloat("Informe o valor da primeira nota: ");
nota2 = readline.questionFloat("Informe o valor da segunda nota: ");
nota3 = readline.questionFloat("Informe o valor da terceira nota: ");
media = (nota1+nota2+nota3)/3;

console.log(media);