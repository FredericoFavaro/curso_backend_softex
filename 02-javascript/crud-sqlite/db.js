const Sequelize = require("sequelize")

//const sequelize = new Sequelize('sqlite::memory:') 
const sequelize = new Sequelize('crud-sqlite', 'root', '123456', {
    storage: './database.sqlite',
    dialect: 'sqlite',
});


//(async () => {
//  try {
//    await sequelize.authenticate();
//    console.log('Connection has been established successfully.');
//  } catch (error) {
//    console.error('Unable to connect to the database:', error);
//  }
//})();

module.exports = sequelize;