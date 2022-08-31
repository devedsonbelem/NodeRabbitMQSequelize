const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Endereco =  connection.define("Endereco", {
    id_endereco: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true,
        autoIncrement: true
    },
    cep: {
        type: Sequelize.STRING,
        validate: {
            is: ["[0-9]{5}-[\d]{3}"],
            allowNull: {
                msg: 'Por favor insira seu cep'
            }
        }
    },
    logradouro: Sequelize.STRING,
    numero: Sequelize.INTEGER,
    complemento: Sequelize.STRING,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    uf: Sequelize.STRING,
    createdAt:{
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true
        },
    updatedAt:{
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: true
    }
    
}, {
    underscored: false,
    freezeTableName: true,
    tableName: 'endereco',
});
Endereco.sync({force: true})

module.exports = Endereco;