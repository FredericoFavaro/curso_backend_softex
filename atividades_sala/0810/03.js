// Exercios funcao com retorno

// 1 - Crie uma funcao chamada somar que aceite dois numeros como paramentros e retorne a soma deles.
function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(5,8));

// 2 - Escreva uma funcao chamada ehPar que aceite um numero como paramentro e retorne true se o numero for par e false caso contrario.
function ehPar(num){
    if (num % 2 == 0){
        return true;
    } else{
        return false;
    }
}

console.log(ehPar(7))
console.log(ehPar(342356))

// 3 - crie uma funcao chamada maiorNumero que receba tres numeros como paramentros e retorne o maior deles.

function maiorNumero(num1,num2,num3){
    maior = num1;
    if (maior < num2){
        maior = num2;
    }
    if (maior < num3){
        maior = num3;
    }
    return maior
}

console.log(maiorNumero(5,1,3))
console.log(maiorNumero(1,2,3))
console.log(maiorNumero(5,1,9))

// 4 - Escreva uma funcao chamada calcularIMC que receba o peso e a altura de uma pessoa como parametros e retorne o indice de massa corporal (IMC) calculado.

function calcularIMC(peso,altura){
    return peso / (altura**2);
}

console.log(calcularIMC(95,1.79))