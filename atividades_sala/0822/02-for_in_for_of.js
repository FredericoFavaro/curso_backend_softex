/*
Suponha que você tenha um objeto com valores numéricos: {a: 10, b:20,c:30, d: 40}. Utilize um laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.
*/

numVar = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
console.log(numVar[1]); // retorna undefined, nao funciona como uma lista
for (let itens in numVar){
    console.log(itens); // a,b,b,d funcionam como um indice
    console.log(numVar[itens])
}
