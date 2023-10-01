// https://www.digitalocean.com/community/tutorials/js-array-search-methods-pt
// https://pt.stackoverflow.com/questions/77622/como-buscar-um-determinado-objeto-dentro-de-um-array

const readline = require("readline-sync");
//const clear ?????

const aluno1 = {
    matricula:1,
    nome: "Ana Silva",
    notas: [8,7,6],
};
const aluno2 = {
    matricula: 2,
    nome: "Paulo Costa",
    notas: [10, 5.5, 6],
};

const alunos = [aluno1, aluno2];

let loop = true;
gerador_matricula = 2;

console.log(alunos[1].nome)
/*
falta coisas aqui
*/

let opcao = readline.questionInt("Escolha uma opção: ");
switch(opcao){
    case 1:
    console.log("Listando todos os alunos");
    console.log("------------------------");
    for (const a of alunos){
        let soma = 0;
        console.log(`Matricula: ${a.matricula}`);
        console.log(`Nome: ${a.matricula}`);
        for (let i = 0; i < a.notas.length; i++) {
            console.log(`\t- Nota ${i+1}: ${a.notas[i]}`);
            soma += a.notas[i];
        }
        let media = soma / a.notas.length;
        console.log(`\t- Média: ${media}`);    
    }
    console.log("------------------------");
    readline.keyInPause();
    break;
    case 2:
        let nomeAluno = readline.question("Digite o nome do aluno: ");
        let notasAluno = [];
        for (let i = 0; i < 3; i++){
            notasAluno[i] = readline.questionFloat(`Digite a nota ${i + 1}: `);
        }
        const aluno = {
            matricula: ++gerador_matricula,
            nome: nomeAluno,
            notas: notasAluno,
        };
        alunos.push(aluno);
        console.log("Aluno cadastrado com sucesso!");
        console.log(alunos)
        readline.keyInPause();
        break;
    case 3:
        console.log("Buscar aluno")
        console.log("1 - Por matrícula\n2 - Por nome");
        let opcao = readline.questionInt("Escolha uma opção: ");
        switch (opcao){
            case 1:
                let busca = readline.questionInt("Informa o número de matrícula do aluno: ");
                if (busca-1<alunos.length){
                    console.log(alunos[busca-1].matricula);
                    console.log(alunos[busca-1].nome);
                    console.log(alunos[busca-1].notas);
                if (alunos.includes(busca, ))
                } else{
                    console.log("Nada")
                }
        }
}
