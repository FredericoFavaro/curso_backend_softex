/*
Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

####################################
###           RESPOSTA           ###
####################################
Filas: Por seguir o princípio First-In-First-Out, a remoção dos elementos ocorre pelo primeiro elemento incluído, ou seja, ele remove sempre o elemento do início da fila, no caso do array, primeiro será removido será o 3, depois o 7, depois o 9 e assim por diante

Listas: Os elementos não são removidos em uma ordem específica. É necessário indicar que elemento deseja remover, assim o método indexOf() percorre o array em busca do elemento, se encontrado, ele é removido da lista.

Pilhas: Seguem o princípio oposto as filas, Last-In-First-Out. Logo, o elemento removido será sempre o último que foi adicionado. No nosso array de exemplo, o primeiro a ser removido será o 0, seguido pelo 1, depois pelo 9 e assim sucessivamente.
*/

let numeros = [3,7,9,1,0];

// Removendo elementos na estrutura de dados fila
function desenfileirar(){
    if(estaVazia()){
        return null;
    }
    return numeros.shift();
}

function estaVazia(){
    return numeros.length === 0;
}

// Removendo elemendos na estrutura de dados lista
function removerLista(elemento) {
    const indice = numeros.indexOf(elemento);
    if (indice !== -1){
        numeros.splice(indice, 1);
        return true;
    } else {
        return false;
    }
}

// Removendo elemendos na estrutura de dados pilha
function desempilhar() {
    if (estaVazia()) {
        return null;
    }
    return numeros.pop();
}

function estaVazia(){
    return numeros.length === 0;
}
