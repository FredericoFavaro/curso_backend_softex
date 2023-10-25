/*
Com base no que estudamos, escolha dois objetos materiais e dois abstratos. Em sequida, faca uma lista com, pelo menos, tres atributos e tres métodos para cada tipo de objeto. Para finalizar, demonstre esses objetos em JavaScript e exemplifique as suas caracteristicas e acoes.
*/

/*##### RESPOSTA: #####
Objetos materiais:
- Carro:
    Atributos: Modelo, Ano, Cor.
    Metodos: Acelerar, Frear, Buzinar.
- Smartphone:
    Atributos: Fabricante, Modelo, Sistema operacional.
    Metodos: Ligar, Desligar, Fazer ligacao, Abrir app.
Objetos abstratos:
- Conta banco:
    Atributos: Tipo, numero, saldo.
    Metodos: Depositar, Sacar, Ver Saldo.
- Viagem:
    Atributos: Origem, Destino, Data, Peso bagagem.
    Metodos: Detalhes da viagem, Cheking, Taxa.
*/

let carro = {
    // Atributos
    modelo: "onix",
    ano: 2022,
    cor: "preto",
    // Metodos
    aceletar() {
        console.log("Vrum Vrum");
    },
    frear() {
        console.log("O carro freou");
    },
    buzinar() {
        console.log("BEP BEEEEP");
    }
}

let smartphone = {
    //Atributos
    fabricante: "Samsung",
    modelo: "Galaxy S11",
    so: "android 8",
    // Metodos
    ligar() {
        return "Ligando aparelho";
    },
    desligar() {
        return "Desligando aparelho";
    },
    fazerChamada() {
        return "Tuuuuu....Tuuuu....";
    },
    abrirApp(nomeApp) {
        return `Abrindo o aplicativo ${nomeApp}`;
    }
}

let contaBanco = {
    // Atributos
    tipo: "corrente",
    numero: "23584456",
    saldo: 50.9,
    // Metodos
    depositar(valor) {
        this.saldo += valor;
    },
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente!");
        }
    },
    verSaldo() {
        return this.saldo
    }
}

let viagem = {
    // Atributos
    origem: "Recife",
    destino: "São Paulo",
    data: "25/12/23",
    pesoBagagem: 33,
    //Metodos
    detalheViagem() {
        return `${this.origem}\n${this.destino}\n${this.data}\n${this.pesoBagagem}`;
    },
    cheking() {
        return "Cheking realizado";
    },
    taxa() {
        if (this.pesoBagagem > 25){
            console.log("O peso da bagagem ultrapassa o limite da franquia\nNecessário pagar uma taxa de R$100,00");
        }
    }
}

