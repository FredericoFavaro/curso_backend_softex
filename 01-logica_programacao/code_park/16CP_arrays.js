/*
Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.
*/

let nomes = ["João","José","Maria","Joana","Leonardo","Lúcio","Euvira","Emílio","Carol","Frank"];
let idades = [12,58,35,8,44,63,25,18,23,74];
let cores = ["amarelo","vermelho","amarelo","preto","azul","roxo","vermelho","azul","preto","preto"];

console.log(nomes);
console.log(idades);
console.log(cores);

console.log("Substituindo Leonardo no index 4 por Leandro");
nomes.splice(4,1,"Leandro");
console.log("Substituindo a idade no index 4 por 34");
idades.splice(4,1,34);
console.log("Removendo Emílio no index 7");
nomes.splice(7,1);
console.log("Removendo a Idade no index 7");
idades.splice(7,1);
console.log("Removendo Cor favorita no index 7");
cores.splice(7,1);
console.log("Removendo ultimo nome no array");
nomes.pop;
console.log("Removendo ultima idade no array");
idades.pop;
console.log("Removendo ultima cor no array");
cores.pop;

console.log(nomes);
console.log(idades);
console.log(cores);


//Loop com forEach para imprimir nome, idade e cor de cada pessoa.
/*
let contadorIdade = 0
let contadorCores = 0
nomes.forEach(function(nome){
    console.log(`Nome: ${nome}\nIdade: ${idades[contadorIdade]}\nCor favorita: ${cores[contadorCores]}\n`);
    contadorIdade++
    contadorCores++
});
*/

//Loop com for para imprimir nome, idade e cor de cada pessoa.
for (let i = 0; i<nomes.length; i++){
    console.log(`Nome: ${nomes[i]}\nIdade: ${idades[i]}\nCor favorita: ${cores[i]}\n`);
}
