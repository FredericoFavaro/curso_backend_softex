/*
Faca um programa em Javascript que receba do usuário um número N e depois imprima os N primeiros números naturais ímpares
*/


let impar = [];

function naturalImpar(numero){
    for (let i = 1; i<=numero; i++){
        if (i%2==0){
            impar.push(i);
        }
    }
    return impar;
}
console.log(naturalImpar(10));
