const Sequelize = require("sequelize");

const connection = new Sequelize('m01','root','cotix',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;




