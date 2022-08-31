const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Corretora = connection.define("Corretora", {
    id_corretora: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true,
        autoIncrement: true
    },
    cnpj: {
        type: Sequelize.STRING,
        validate: {
            is: ["/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/"],
            allowNull: {
                msg: 'Por favor insira seu cnpj'
            }
        }
    },
    nome: {
        type: Sequelize.STRING
        // validate:{
        //     len: [2,100]
        // }
    },
    razaoSocial: {
        type: Sequelize.STRING
        // validate:{
        //     len: [2,100]
        // }
    
    },
    possuiSupervisor: Sequelize.BOOLEAN,
    codigo: Sequelize.INTEGER,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        }

    },
    intAtivo: Sequelize.STRING,
    indLiberacaoColaborador: Sequelize.BOOLEAN,
    sistemaParceiroCorretora: Sequelize.BOOLEAN,
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
    tableName: 'corretora',
});
Corretora.sync({ force: true })

module.exports = Corretora;