/*
Faca um programa com javascript para verificar se um determinado ano , fornecido pelo usuario, é bissexto. Um ano e bissexto se for divisivel por 400 ou se for divisivel por 4 e nao for divisivel por 100. exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.
*/

ano = 1988

function anoBissexto(ano) {
    if (ano % 400 == 0 || (ano % 4 == 0 && !(ano % 100 == 0))) {
        return `o ano ${ano} é bissexto!!`
    } else {
        return `o ano ${ano} NÃO é bissexto!!`
    }
}

console.log(anoBissexto(1988))
console.log(anoBissexto(1992))
console.log(anoBissexto(1996))
console.log(anoBissexto(2000))
console.log(anoBissexto(1900))