/*
Crie uma função recursiva chamada somaRecursiva que receba um numero interio positivo n como argumento e calcule a soma de todos os numeros inteiros de 1 ate n.
*/

function somaRecursiva(n){
    if (n===1){
        return 1;
    } else if (n<=0){
        return "Erro: Informe um valor positivo";
    }
    return n + somaRecursiva(n-1);
}
let numero = 5
console.log(`A soma recursiva do número ${numero} é ${somaRecursiva(numero)}`);

numero = 1
console.log(`A soma recursiva do número ${numero} é ${somaRecursiva(numero)}`);
numero = "1"
console.log(`A soma recursiva do número ${numero} é ${somaRecursiva(numero)}`);
numero = 0
console.log(`A soma recursiva do número ${numero} é ${somaRecursiva(numero)}`);