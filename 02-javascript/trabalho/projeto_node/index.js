/*
Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 
*/

const readline = require("readline-sync");

// Declarando variaveis
var candidato_X=0 ,candidato_Y=0, candidato_Z=0, brancos=0, nulos=0, voto, continuar=true, vencedor, vencedorNome;

// funcoes

function votacao(){
    while(continuar){
        console.log("\nCandidatos:\n\n > Candidato X = 889\n > Condidato Y = 847\n > Candidato Z = 515\n > Branco      = 0\n")
        voto=parseInt(readline.question("Informe o número do candidato que você quer votar: "));
        if(isNaN(voto) == false){
            switch(voto){
                case 889:
                    candidato_X+=1;
                    break
                case 847:
                    candidato_Y+=1;
                    break
                case 515:
                    candidato_Z+=1;
                    break
                case 0:
                    brancos+=1;
                    break
                default:
                    nulos+=1;
                    break
            }
        } else{
            console.log("\nVocê não informou um valor válido. Informe apenas números\n")
            continue
        }
        continuarVotacao()
    }
}

function continuarVotacao(){
    while (true){
        continuar=parseInt(readline.question("\nDeseja continuar votando?\n1-Sim 2-Não\n"));
        if (continuar == 1){
            break;
        } else if (continuar == 2){
            console.log("Encerrando votação...")
            continuar = false
            break
        } else{
            console.log("\nVocê não informou um valor válido. Responda 1 para sim ou 2 para não")
        }
    }
}

function vencedorVotacao(){
    vencedor = candidato_X;
    vencedorNome = "Candidato X";
    if (candidato_Y > vencedor){
        vencedor = candidato_Y;
        vencedorNome = "Candidato Y";
    }
    if (candidato_Z > vencedor){
        vencedor = candidato_Z;
        vencedorNome = "Candidato Z";
    }
}

function resultadoVotacao(){
    console.log("\n========== RESULTADO ELEIÇÕES 202X ==========");
    console.log(`Candidato Eleito: ${vencedorNome}`);
    console.log(`\nCandidato X: ${candidato_X}\nCandidato Y: ${candidato_Y}\nCandidato Z: ${candidato_Z}\nBrancos:     ${brancos}\nNulos:       ${nulos}`);
}

// Main
console.log("\n========== Eleições 202X ==========")
votacao()
vencedorVotacao()
resultadoVotacao()
