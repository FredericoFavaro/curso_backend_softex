# Lista Enumerates

## 1. Suponha que você está desenvolvendo um aplicatico de agendamento e precisa representar os dias da semana. Como voce usaria o enums para isso e qual seria o beneficio?

```js
const diaSemana = {
    DOMINGO: "Domingo",
    SEGUNDA: "Segunda-Feira",
    TERCA: "Terça-Feira",
    QUARTA: "Quarta-Feira",
    QUINTA: "Quinta-Feira",
    SEXTA: "Sexta-Feira",
    SABADO: "Sabado"
};
```
O beneficio de usar esse tipo de recurso é padronizar os valores e simplificar a forma de chama-los no código.

## 2. Você esta construindo um jogo e precisa representar os diferentes tipos de inimigos. Como você usaria o enums para essa situação?

```
const inimigos = {
    SLIME: "Slime",
    GOBLIN: "Boblin",
    ORC: "Orc",
    ZUMBI: "Zumbi,
    ESQUELETO: "Esqueleto",
    DRAGAO: "Dragão"
}
```

## 3. Você esta criando um aplicativo de reserva de passagens aéreas e precisa representar os diferentes tipos de classe (Econômica, Executiva, Primeira Classe). Como você usaria o enums para isso?

```js
const passagensClasses = {
    ECONOMICA: "Econômica",
    EXECUTIVA: "Executiva",
    PCLASSE: "Primeira Classe"
}
```

## 4. Imagine qe você está desenvolvendo um aplicativo de tarefas e deseja categorizar as tarefas em "Trabalho", "Estudo" e "Lazer". Como você usaria enums para esse cenário?

```js
const tiposTarefas = {
    TRABALHO: "Trabalho",
    ESTUDO: "Estudo",
    LAZER: "Lazer"
}
```

## 5. Em um aplicativo de e-commerce, você precisa definir os diferentes status de um pedido: "Em processamento", "Enviado" e "Entregue". Como você usaria enums para isso?

```js
const statusPedido = {
    PROCESSAMENTO: "Em Processamento",
    ENVIADO: "Enviado",
    ENTREGUE: "Entregue"
}
```