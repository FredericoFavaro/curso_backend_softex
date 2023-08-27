/*
Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora vamos criar variáveis do tipo boolean, BigInt, string e symbol. No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser UNDEFINED. Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela.
*/

let boleano, inteiroGrande, texto, simbolo;

console.log(`Boleano: ${boleano}\nBigInt: ${inteiroGrande}\nString: ${texto}\nSymbol: ${simbolo}`);

boleano = null;
inteiroGrande = null;
texto = null;
simbolo = null;

console.log(boleano);
console.log(inteiroGrande);
console.log(texto);
console.log(simbolo);

boleano = true;
inteiroGrande = 4324235254624625432546432n;
texto = "uma string qualquer";
simbolo = Symbol("um símbolo");

console.log(boleano, typeof(boleano));
console.log(inteiroGrande, typeof(inteiroGrande));
console.log(texto, typeof(texto));
console.log(simbolo, typeof(simbolo));