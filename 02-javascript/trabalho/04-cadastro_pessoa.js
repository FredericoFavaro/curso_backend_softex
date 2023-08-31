/*
Vamos criar um cadastro de pessoa com os seguintes dados: nome, salário, idade e se possui diploma. Antes de começar a codificação, identifique os tipos de cada variável. Em seguida, desenvolvam o codigo utilizando exemplos para cada variável que respeitem os tipos identificados. Certifiquem-se de que os valores correspondam aos tipos de dados corretos.
*/

/* Identificação dos dados
nome: string
salário: number
idade: number
possuiDiploma: bolean
*/

let pessoa = {
    nome: "João Silva",
    salario: 8500.00,
    idade: 38,
    possuiDiploma: false
}

console.log(`A variável nome com valor ${pessoa.nome} é do tipo:`,typeof(pessoa.nome));
console.log(`A variável salario com valor ${pessoa.salario} é do tipo:`,typeof(pessoa.salario));
console.log(`A variável idade com valor ${pessoa.idade} é do tipo:`,typeof(pessoa.idade));
console.log(`A variável possuiDiploma com valor ${pessoa.possuiDiploma} é do tipo:`,typeof(pessoa.possuiDiploma));