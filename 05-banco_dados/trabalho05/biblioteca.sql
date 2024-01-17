/*
INSTRUCOES
Considere um banco de dados simples que armazena informações sobre livros e autores. As tabelas relevantes são as seguintes:
1. Tabela "Autores": Colunas: AutorID (Chave Primária), Nome, Nacionalidade
2. Tabela "Livros": Colunas: LivroID (Chave Primária), Titulo, AnoPublicacao AutorID (Chave Estrangeira referenciando Autores)

Instruções:
1. Inserção de dados: insira alguns registros nas tabelas "Autores" e "Livros". Certifique-se de que existam, pelo menos três autores e cinco livros associados a esses autores;
2. Consulta simples: realize uma consulta simples para listar todos os autores e seus livros associados;
3. Consulta com junção INNER JOIN: crie uma consulta que utilize INNER JOIN para listar os detalhes dos livros e seus autores correspondentes;
4. Consulta com junção LEFT JOIN: elabore uma consulta que utilize LEFT JOIN para exibir todos os autores, independentemente de terem livros associados. Inclua informações dos livros, se disponíveis;
5. Consulta com filtro por nacionalidade: realize uma consulta que liste os autores e seus livros, mas restrinja os resultados apenas aos autores de uma nacionalidade específica;
6. Consulta agregada: crie uma consulta que agregue dados para contar quantos livros cada autor escreveu.

Observações:
utilize as chaves primárias e estrangeiras corretamente nas junções;
documente cada consulta explicando o propósito e os resultados esperados;
*/

-- Criando tabela de dados Autores e Livros
CREATE TABLE Autores ( 
    AutorID INT PRIMARY KEY,  
    Nome VARCHAR(50),    
    Nacionalidade VARCHAR(50)
); 

CREATE TABLE Livros( 
    LivroID INT PRIMARY KEY,  
    Titulo VARCHAR(100),
    AnoPublicacao INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores (AutorID)
); 

-- Inserindo dados nas tabelas
INSERT INTO Autores (AutorID, Nome, Nacionalidade) VALUES
    (1,'Frank Patrick Herbert', 'Americano'),
    (2,'William Ford Gibson', 'Americano'),
    (3,'Arthur Charles Clarke', 'Britanico'),
    (4,'Frederico Fávaro', 'Brasileiro');

INSERT INTO Livros (LivroID, Titulo, AnoPublicacao, AutorID) VALUES
    (1, 'Duna', 1964, 1),
    (2, 'Neuromancer', 1984, 2),
    (3, '2001: Uma Odisseia no espaço', 1968, 3),
    (4, 'O fim da infancia', 1953, 3),
    (5, 'O periferico', 2014, 2);

-- Consulta para listar todos os autores e seus livros associados
SELECT Autores.Nome, Livros.Titulo FROM Autores JOIN Livros ON Autores.AutorID = Livros.AutorID;

/*
+-----------------------+-------------------------------+
| Nome                  | Titulo                        |
+-----------------------+-------------------------------+
| Frank Patrick Herbert | Duna                          |
| William Ford Gibson   | Neuromancer                   |
| Arthur Charles Clarke | 2001: Uma Odisseia no espaço  |
| Arthur Charles Clarke | O fim da infancia             |
| William Ford Gibson   | O periferico                  |
+-----------------------+-------------------------------+
*/

-- Consulta com INNER JOIN para listar detalhes dos livros e seus autores correspondentes
SELECT Autores.AutorID, Autores.Nome, Autores.Nacionalidade, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

/*
+---------+-----------------------+---------------+-------------------------------+---------------+
| AutorID | Nome                  | Nacionalidade | Titulo                        | AnoPublicacao |
+---------+-----------------------+---------------+-------------------------------+---------------+
|       1 | Frank Patrick Herbert | Americano     | Duna                          |          1964 |
|       2 | William Ford Gibson   | Americano     | Neuromancer                   |          1984 |
|       3 | Arthur Charles Clarke | Britanico     | 2001: Uma Odisseia no espaço  |          1968 |
|       3 | Arthur Charles Clarke | Britanico     | O fim da infancia             |          1953 |
|       2 | William Ford Gibson   | Americano     | O periferico                  |          2014 |
+---------+-----------------------+---------------+-------------------------------+---------------+
*/

-- Consulta com LEFT JOIN para exibir todos os autores, independentemente de terem livros associados
SELECT Autores.AutorID, Autores.Nome, Autores.Nacionalidade, Livros.Titulo, Livros.AnoPublicacao
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

/*
+---------+-----------------------+---------------+-------------------------------+---------------+
| AutorID | Nome                  | Nacionalidade | Titulo                        | AnoPublicacao |
+---------+-----------------------+---------------+-------------------------------+---------------+
|       1 | Frank Patrick Herbert | Americano     | Duna                          |          1964 |
|       2 | William Ford Gibson   | Americano     | Neuromancer                   |          1984 |
|       2 | William Ford Gibson   | Americano     | O periferico                  |          2014 |
|       3 | Arthur Charles Clarke | Britanico     | 2001: Uma Odisseia no espaço  |          1968 |
|       3 | Arthur Charles Clarke | Britanico     | O fim da infancia             |          1953 |
|       4 | Frederico Fávaro      | Brasileiro    | NULL                          |          NULL |
+---------+-----------------------+---------------+-------------------------------+---------------+
*/

-- Consulta para listar autores e seus livros, restrita a uma nacionalidade específica (Britanico)
SELECT Autores.AutorID, Autores.Nome, Autores.Nacionalidade, Livros.Titulo
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Britanico';

/*
+---------+-----------------------+---------------+-------------------------------+
| AutorID | Nome                  | Nacionalidade | Titulo                        |
+---------+-----------------------+---------------+-------------------------------+
|       3 | Arthur Charles Clarke | Britanico     | 2001: Uma Odisseia no espaço  |
|       3 | Arthur Charles Clarke | Britanico     | O fim da infancia             |
+---------+-----------------------+---------------+-------------------------------+
*/

-- Consulta para contar quantos livros cada autor escreveu
SELECT Autores.AutorID, Autores.Nome, COUNT(Livros.LivroID) AS NumeroLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.AutorID, Autores.Nome;

/*
+---------+-----------------------+--------------+
| AutorID | Nome                  | NumeroLivros |
+---------+-----------------------+--------------+
|       1 | Frank Patrick Herbert |            1 |
|       2 | William Ford Gibson   |            2 |
|       3 | Arthur Charles Clarke |            2 |
|       4 | Frederico Fávaro      |            0 |
+---------+-----------------------+--------------+
*/