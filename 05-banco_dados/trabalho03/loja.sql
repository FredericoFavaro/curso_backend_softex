/*
INSTRUCOES
Você é o gerente de uma loja de eletrônicos e deseja utilizar um banco de dados para rastrear o estoque de seus produtos. Para isso, você precisa executar várias ações de gerenciamento no banco de dados da loja.
Nesse caso, a tabela de banco de dados disponível é:

Produtos
    Colunas: ProdutoID (Chave Primária), Nome do Produto, Preço, Quantidade em Estoque.

Crie os seguintes comandos para inserção e manipulação de dados, partindo do pressuposto de que os de criação da tabela já foram criados. 
Eles são:

    1. inserção de produtos (INSERT): insira três novos produtos na tabela "Produtos" com os seguintes dados:
        - produto 1: Nome - "Smartphone", Preço - 799.99, Quantidade - 20 unidades em estoque;
        - produto 2: Nome - "Tablet", Preço - 349.99, Quantidade - 10 unidades em estoque;
        - produto 3: Nome - "Fone de Ouvido", Preço - 49.99, Quantidade - 50 unidades em estoque.

    2. Atualizacao de estoque (UPDATE): Atualize o estoque do "Smartphone" para 25 unidades e o Preço para 849.99 na tabela "Produtos".

    3. Venda de produtos (DELETE): Simule a venda de cinco unidades do "Tablet" e dez unidades do "Fone de Ouvido". Atualize o estoque na tabela "Produtos" de acordo com as vendas
*/

CREATE DATABASE Loja;
USE Loja;

CREATE TABLE Produtos 
( 
 ProdutoID INT PRIMARY KEY,  
 NomeProduto VARCHAR(50),
 Preco FLOAT,
 Estoque INT
);

INSERT INTO Produtos (ProdutoID, NomeProduto, Preco, Estoque) VALUES 
(1, "Smartphone", 799.99, 20),
(2, "Tablet", 349.99, 10),
(3, "Fone de Ouvido", 49.99, 50);

UPDATE Produtos SET preco = 849.99, Estoque = 25 WHERE ProdutoID = 1;
UPDATE Produtos SET Estoque = Estoque - 5 WHERE ProdutoID = 2;
UPDATE Produtos SET Estoque = Estoque - 10 WHERE ProdutoID = 3;