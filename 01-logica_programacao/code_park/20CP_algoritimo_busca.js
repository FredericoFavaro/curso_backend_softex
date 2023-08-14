/*
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.
*/

// Devido ao array ser pequeno, a forma mais simples sera a busca linear

let lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let elemento = 20;

function buscaLinear(array, elemento){
    for (let i = 0; i < array.length; i++){
        if (array[i] === elemento){
            return i;
        }
    }
    return -1;
}

let indiceElemento = buscaLinear(lista, elemento);

console.log("Solução usando busca linear e for");
if (indiceElemento !== -1) {
    console.log(`O elemento ${elemento} se encontra no índice ${indiceElemento}`);
} else{
    console.log(`O elemento ${elemento} não foi encontrado`);
}

// Uma forma bem mais simples é usando o metodo indexOf
indiceElemento = lista.indexOf(elemento)
console.log("Solução usando metodo indexOf()");
if (indiceElemento !== -1) {
    console.log(`O elemento ${elemento} se encontra no índice ${indiceElemento}`);
} else{
    console.log(`O elemento ${elemento} não foi encontrado`);
}

// Demonstração do algoritimo de busca binária
// Ordenando a lista
// Metodo toSorted: nao modifica a lista original
novaLista = lista.toSorted((a, b) => a - b);
//console.log(novaLista);
//console.log(lista);

// Metodo sort: modifica a lista original
lista.sort((a, b) => a - b);
//console.log(lista);

// Criando funcao de busca binaria
function buscaBinaria(lista, elmento){
    let inicio = 0;
    let fim = lista.length -1;
    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim)/2);
        if (lista[meio] === elemento){
            return meio;
        }
        if (lista[meio] > elemento){
            fim = meio-1;
        } else {
            inicio = meio+1;
        }
    }
    return -1
}
console.log("Solução usando busca Binaria");
indiceElemento = buscaBinaria(lista, elemento);
if (indiceElemento !== -1) {
    console.log(`O elemento ${elemento} se encontra no índice ${indiceElemento}`);
} else{
    console.log(`O elemento ${elemento} não foi encontrado`);
}