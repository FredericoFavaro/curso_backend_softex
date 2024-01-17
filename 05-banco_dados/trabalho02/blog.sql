/*
Instruções:
Você é um desenvolvedor de banco de dados encarregado de criar um banco de dados para um blog on-line. Ele deve conter informações sobre posts, autores e comentários. Cada post é escrito por um autor e pode ter vários comentários.

Tarefas:
1. Crie um banco de dados chamado "BlogDB.";
2. Crie as tabelas a seguir:
    a) "Post" - Colunas: PostID (Chave Primária), Título, Conteúdo, Data de Publicação, AutorID (Chave Estrangeira para a tabela Autor).
    b) "Autor" - Colunas: AutorID (Chave Primária), Nome do Autor, E-mail.
    c) "Comentario" - Colunas: ComentarioID (Chave Primária), Texto do Comentário, Data do Comentário, AutorID (Chave Estrangeira para a tabela Autor), PostID (Chave Estrangeira para a tabela Post).
3. Defina a integridade referencial entre as tabelas, de acordo com as relações descritas (um post é escrito por um autor, um autor pode escrever vários posts, um post pode ter vários comentários, um comentário é escrito por um autor)
*/

-- Criando DB

CREATE DATABASE BlogDB;
USE BlogDB;

CREATE TABLE Post (
    PostID INT PRIMARY KEY,
    Titulo VARCHAR(max),
    Conteudo VARCHAR(400),
    DataDePublicacao DATE,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
); 

CREATE TABLE Autor ( 
    AutorID INT PRIMARY KEY,  
    Nome VARCHAR(50),    
    Email VARCHAR(20)
); 

CREATE TABLE Comentario ( 
    ComentarioID INT PRIMARY KEY,  
    TextoDoComentario VARCHAR(200),  
    DataDoComentario DATE,
    AutorID INT,
    PostID INT,
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
); 

-- A integridade referencial e garantida atraves da relacao entre tabelas criadas a partir das chaves estrangeiras presentes nas tabelas Post e Comentario