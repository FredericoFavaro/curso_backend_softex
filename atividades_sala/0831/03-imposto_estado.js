/*
Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada estado possui uma taxação de impostos diferente sovre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faca um programa em jacascript, que o usuário entre com o valor e o estado destino do produto e o prgrama retorne o preco final do produto acrescido do imposto correspondente ao estado onde sera vendido. O programa deve mostrar uma mensagem de erro caso o estado fornecido não esteja na lista de estados váidos.
*/
const readline = require("readline-sync");
let valor = readline.questionFloat("Informe o valor do produto: ");
let estado = readline.question("Para qual Estado o produto será enviado: ");

function imposto (estado,valor){
    switch (estado) {
        case "MG":
            return valor+valor*0.07;
        case "SP":
            return valor+valor*0.12;
        case "RJ":
            return valor+valor*0.15;
        case "MS":
            return valor+valor*0.08;
        default:
            return `O Estado informado, ${estado}, não esta listado no sistema.\nO produto não sera taxado.\nValor final: ${valor}`;
    }
}

console.log(imposto(estado,valor));

