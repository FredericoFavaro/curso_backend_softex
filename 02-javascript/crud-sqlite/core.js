(async () => {
    const database = require("./db");
    const Produto = require("./produto");

    
    try {
        conect = await database.sync();
        console.log(conect);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error(error);
    }

    
//    try {
//        await database.authenticate();
//        console.log('Connection has been established successfully.');
//    } catch (error) {
//        console.error('Unable to connect to the database:', error);
//    }
//    await database.sync();
//
//    const novoProduto = Produto.create({
//        nome: "teste",
//        preco: 55,
//        descricao: "teste produto",
//    })
//
//    console.log(novoProduto);
})();