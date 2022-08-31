const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const GrupoCampoContrato = connection.define("GrupoCampoContrato",{
    id_GrupoCampoContrato:{
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
    tableName: 'grupo_campo_contrato',

});

GrupoCampoContrato.sync({force:true})

GrupoCampoContrato.associate = function (models) {
    GrupoCampoContrato.hasMany(models.ConfiguracaoMovimentacao, {
        through: 'configuracaoMovimentacao',
        as: 'configuracaoMovimentacao',
        foreignKey: 'id_configuracaoMovimentacao',
    });
}

module.exports = GrupoCampoContrato;