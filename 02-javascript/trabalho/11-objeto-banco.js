/*
Crie um codigo com um objeto chamado "banco". Ele devera ter propriedades que incluem conta, saldo, tipo de conta e agencia e seus metodos devem ser: buscar saldo, deposito, saque e numero da conta.
Observações:
- Buscar saldo deve restornar o valor atual do saldo;
- para o deposito, voce devera passar um valor como parametro e adiciona-lo no saldo final do objeto;
- para o saque, voce devera passar um valor como parametro e subtrai-lo no salso final do objeto;
- O numero da conta deve retornar o número da conta.

*/

// criei o objeto usando os dois metodos: inicializador de objeto e Funcao construtora

// inicializador de objeto
let banco = {
    //propriedades
    conta: "2549844567",
    saldo: 52.00,
    tipoDeConta: "Poupanca",
    agencia: "222",
    // metodos
    buscarSaldo: function () {
        return this.saldo;
    },
    deposito: function (valor) {
        this.saldo+=valor;
    },
    saque: function (valor) {
        this.saldo-=valor;
    },
    numeroConta: function () {
        return this.conta;
    }
} 

console.log(banco.buscarSaldo());
banco.deposito(15.66);
console.log(banco.buscarSaldo());
banco.saque(20);
console.log(banco.buscarSaldo());
console.log(banco.numeroConta());

console.log("###############");
// funcao construtora
function bancoConta(conta,saldo,tipoDeConta,agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoDeConta = tipoDeConta;
    this.agencia = agencia;
    //metodos
    this.buscarSaldo = function mostraSaldo() {
        return this.saldo;
    }
    this.deposito = function lala(valor) {
        this.saldo+=valor;
    }
    this.saque = function lulu(valor) {
        this.saldo-=valor;
    }
    this.numeroConta = function lili() {
        return this.conta;
    }
}

const minhaConta = new bancoConta(8641568, 2,"poupanca",222);
console.log(minhaConta.buscarSaldo());
minhaConta.deposito(15.66);
console.log(minhaConta.buscarSaldo());
minhaConta.saque(20);
console.log(minhaConta.buscarSaldo());
console.log(minhaConta.numeroConta());