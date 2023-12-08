/*
Desafio do Explorador de Web Services
Olá, intrépidos exploradores do código! Neste emocionante desafio, vocês estão prestes a embarcar em uma jornada pelo vasto território dos web services!
Vamos criar juntos um Web Service simples que receberá visitantes e os saudará com uma mensagem acolhedora.

Missão:
- Importe o módulo mágico chamado "express", que nos permitirá criar incríveis serviços web.
- Estabeleça a base do seu acampamento, criando uma instância do Express. Dê a ela o nome "app".
- Trace o caminho da rota inicial (/) que será a porta de entrada para os visitantes
- Configure essa rota para responder a todos com uma mensagem calorosa: "Bem-vindo ao meu web service!"
- Inicie o servidor na misteriosa Porta 3000 e esteja pronto para receber os bravos exploradores. 

Dicas:
- Utilize os conhecimentos adquiridos sobre rotas, instância do Express e como iniciar o servidor.
- Atente-se aos detalhes, pois um pequeno erro pode transformar sua aventura em uma jornada tortuosa.

Pronto para começar sua exploração?
Boa sorte, corajosos desenvolvedores!
*/

//import express from "express";

const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo ao meu web service!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});