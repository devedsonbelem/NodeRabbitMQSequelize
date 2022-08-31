const Movimentacao = require("./Movimentacao");
const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");


    const AbrangenciaGeografica = connection.define("AbrangenciaGeografica", {
        id_abrangenciaGeografica:  {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            notEmpty: true, 
            autoIncrement: true
        },
        descricao: Sequelize.STRING,
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
        tableName: 'abrangencia_geografica',
    });

    
    AbrangenciaGeografica.sync({force: true})

   
    module.exports = AbrangenciaGeografica;
