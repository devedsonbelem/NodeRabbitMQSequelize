const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Corretor = connection.define("Corretor", {
    id_corretor: {
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
    nome: {
        type: Sequelize.STRING,
        validate: {
            len: [2, 100],
        }
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        }

    },
    celular:{
        type: Sequelize.STRING,
        // validate:{
        //     max:8,
        //     min:8
        // }

    },
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
    tableName: 'corretor',
});
Corretor.sync({ force: true })

module.exports = Corretor;