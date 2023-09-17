const Sequelize = require('sequelize');

const connection = new Sequelize('GuiaPerguntas','root','180320',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;