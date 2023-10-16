/*
Realizando teste de conexao com banco de dados SQLite usando o Sequelize
Pre-requisito: "npm i sequelize sqlite3", banco de dados deve estar instalado no sistema.
Fontes: https://sequelize.org/docs/v6/getting-started/
        https://sequelize.org/docs/v6/getting-started/#testing-the-connection 
        https://www.luiztools.com.br/post/tutorial-de-crud-com-node-js-sequelize-e-sqlite/
*/

const Sequelize = require("sequelize")

//em "storage" informar o nome do banco e o local onde sera salvo.
const sequelize = new Sequelize({
    storage: './database.sqlite',
    dialect: 'sqlite',
});

// Para testar conexao, usar o metodo .authenticate(). Como prerequisito para funcionamento do "await", o codigo precisa se encapsulado com uma funcao IIFE: (async () => {codigo})();
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão realizada com sucesso!!!');
    } catch (error) {
        console.error('Erro na conexão: ', error);
    }
})();
