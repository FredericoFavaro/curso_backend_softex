/*
Título: 
Desafio do Arquiteto de Rotas 

Descrição:
Parabéns por seu progresso no reino das rotas! Neste desafio aprimorado, vamos focar na importância do middleware BodyParser para lidar com solicitações POST e PUT.

Missão:
- Novo EndPoint de Usuários:
    - Crie um novo EndPoint para listar todos os usuários em seu Web Service. Utilize o verbo HTTP apropriado para esta operação.
- Rota HTTP para Detalhes do Usuário:
    - Desenvolva uma rota HTTP específica para obter detalhes de um usuário com base em seu ID. Lembre-se de seguir boas práticas de nomenclatura.
- Middleware BodyParser:
    - Introduza o middleware BodyParser em seu serviço para facilitar o processamento de dados nas solicitações POST e PUT. Este middleware ajudará a extrair dados do corpo da solicitação.
- EndPoint para Adicionar Usuário:
    - Expanda seu serviço para permitir a adição de novos usuários. Utilize o verbo HTTP apropriado e utilize o BodyParser para processar os dados do corpo da solicitação.
- Rota HTTP para Saudação Personalizada:
    - Crie uma rota HTTP especial que aceite o nome do usuário como parâmetro e retorne uma saudação personalizada. Utilize uma nomenclatura significativa.

Dicas:
- O middleware BodyParser deve ser adicionado antes das rotas que precisam processar dados do corpo da solicitação.
- Mantenha a consistência nas nomenclaturas, tornando-as descritivas e compreensíveis.
- Utilize códigos de resposta HTTP adequados para indicar o sucesso ou falha das operações.
- Teste suas novas rotas com ferramentas como cURL ou Postman.
Está preparado para levar suas rotas para o próximo nível? Avance com determinação, destemidos desenvolvedores!
*/

const express = require('express');
const BodyParser = require('body-parser');
const app = express();

//Adicionando o Middleware
app.use(BodyParser.json());

//Criando uma array de usuarios para teste
const users = [
    {
        id: 1, 
        nome: "John Doe", 
        idade: 43, 
        profissao: "Desenvolvedor"
    },
    { 
        id: 2, 
        nome: "Mary Smith", 
        idade: "25", 
        profissao: "CEO empresa X" 
    },
];

//Tracando o caminho da rota root (/)
app.get("/", (req, res) => {
    res.send("Bem-vindo ao meu web service!");
});

//Tracando o caminho da rota para a array de usuarios e a retornando
app.get("/users", (req, res) => {
    res.send(users);
});

//Tracando rota para usuario identificado pelo id
app.get("/users/:id", (req, res) => {
    const user = users.find((l) => l.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    };
    res.send(user);
});

//Rota para adicionar novos usuarios
app.post("/users", (req, res) => {
    const newUser = {
      id: users.length + 1,
      nome: req.body.nome,
      idade: req.body.idade,
      profissao: req.body.profissao,
    };
  
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
app.get("/saudacao/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome} tudo bem?`);
});

//Definindo porta
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});