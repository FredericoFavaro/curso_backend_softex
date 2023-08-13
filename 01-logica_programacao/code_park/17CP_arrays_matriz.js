/*
Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.
*/

let pets = [
    ["Nome:","Espécie:","Idade:"],
    ["Baconzito", "cachorro viralata", 2],
    ["Kat", "gato siames", 5],
    ["Lee", "peixe beta", 1]
];

console.log("Imprimindo usando um for");
for (let pet = 1; pet < pets.length; pet++){
   console.log(`Nome: ${pets[pet][0]}\nEspécie: ${pets[pet][1]}\nIdade: ${pets[pet][2]}`);
}

console.log("\nUsando for aninhado");
for (let pet = 1; pet < pets.length; pet++){
    for (let caracter = 0; caracter < pets[pet].length; caracter++){
        console.log(pets[0][caracter],pets[pet][caracter]);
    }

 }