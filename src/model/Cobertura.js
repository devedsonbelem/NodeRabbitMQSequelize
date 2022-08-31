const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Cobertura = connection.define("Cobertura", {
    id_cobertura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true, 
        autoIncrement: true
    },
    descricao: Sequelize.TEXT,
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
    underscored: true,
    freezeTableName: true,
    tableName: 'cobertura',
});
    Cobertura.sync({force: true})

    module.exports = Cobertura;
