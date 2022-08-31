const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Contrato = connection.define("Contrato", {
    id_contrato: {
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
    tableName: 'contrato',
});
    Contrato.sync({force: true})

    Contrato.associate = function (models) {
        Contrato.hasMany(models.Beneficiario, {
            through: 'beneficiario',
            as: 'beneficiario',
            foreignKey: 'id_beneficiario',
        });
    }

    module.exports = Contrato;