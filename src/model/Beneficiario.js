const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Beneficiario = connection.define("Beneficiario", {
    id_beneficiario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true, 
        autoIncrement: true
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
},{
    underscored: false,
    freezeTableName: true,
    tableName: 'beneficiario',
});
    Beneficiario.sync({force: true})

    Beneficiario.associate = function (models) {
        Beneficiario.hasOne(models.Contrato, {
            through: 'contrato',
            as: 'contrato',
            foreignKey: 'id_contrato',
        });
    }

    module.exports = Beneficiario;