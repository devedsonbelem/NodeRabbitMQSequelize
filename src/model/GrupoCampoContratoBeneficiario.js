const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const GrupoCampoContratoBeneficiario = connection.define("GrupoCampoContratoBeneficiario",{
    id_GrupoCampoContratoBeneficiario:{
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
    tableName: 'grupo_campo_contrato_beneficiario',

});

GrupoCampoContratoBeneficiario.sync({force:true})

module.exports = GrupoCampoContratoBeneficiario;