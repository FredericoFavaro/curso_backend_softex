/*
Dado um array de números [3,7,2,9,5], crie um loop "for" que itere pelo array e exiba cada elemento no console
*/
numeros = [3,7,2,9,5]

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

for (i in numeros){
    console.log(numeros[i]);
}