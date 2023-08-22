/*
Dado um array de numeros [12,5,8,21,16,7], crie umm loop "for" que itere pelo array, verificando se cada número é par. Se for par, adicione-o um novo array. No final, exiba o novo array com os números pares.
*/

numeros = [12,5,8,21,16,7];
pares = [];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i]%2==0){
        pares.push(numeros[i]);
    }
}
console.log(pares);