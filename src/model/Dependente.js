const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Dependente = connection.define("Dependente", {
    id_dependente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true,
        autoIncrement: true
    },
    cpf: {
        type: Sequelize.STRING,
        validate: {
            is: ["/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"],
            allowNull: {
                msg: 'Por favor insira seu cpf'
            }
        }
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        isDate: true,

    },
    nomeMae: {
        type: Sequelize.STRING,
        validate:{
            len: [2,100],
        }
    },
    cns: Sequelize.BOOLEAN,
    dnv: Sequelize.STRING,
    valorPlano: Sequelize.DECIMAL,
    idade: Sequelize.STRING,
    numeroCarteirinha: Sequelize.BOOLEAN,
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
    tableName: 'dependente',
});
Dependente.sync({ force: true })

module.exports = Dependente;