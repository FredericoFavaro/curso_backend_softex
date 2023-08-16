// escrever função fatorial usando principio de recursividade

function fatorial(n){
    if (n === 0 || n === 1) {  // condicao de parada
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}
const numero = 5
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`)