const Sequelize = require("sequelize")

const sequelize = new Sequelize('crud-sqlite', 'root', '123456', {
    storage: './database.sqlite',
    dialect: 'sqlite',
});

module.exports = sequelize;