/*
Atividade:
Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir.
Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

OBS: Optei por começar a resolver as atividades diretamente em JavaScript.
*/

console.log("Iniciando contagem regressiva")
for (var contador = 10; contador >= 0; contador--) {
    console.log(contador,"...");
    if (contador == 0) {
        console.log("BUM!");
    }
}

 