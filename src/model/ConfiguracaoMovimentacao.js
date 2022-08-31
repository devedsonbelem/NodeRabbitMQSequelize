const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const ConfiguracaoMovimentacao = connection.define("ConfiguracaoMovimentacao", {
    id_configuracaoMovimentacao: {
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

}, {
    underscored: false,
    freezeTableName: true,
    tableName: 'configuracao_movimentacao',
});

ConfiguracaoMovimentacao.sync({ force: true })

ConfiguracaoMovimentacao.associate = function (models) {
    ConfiguracaoMovimentacao.hasOne(models.TipoMovimentacao, {
        through: 'tipoMovimentacao',
        as: 'tipoMovimentacao',
        foreignKey: 'id_tipoMovimentacao',
    });
}
ConfiguracaoMovimentacao.associate = function (models) {
    ConfiguracaoMovimentacao.hasOne(models.Operadora, {
        through: 'operadora',
        as: 'operadora',
        foreignKey: 'id_operadora',
    });
}
ConfiguracaoMovimentacao.associate = function (models) {
    ConfiguracaoMovimentacao.hasOne(models.GrupoCampoContrato, {
        through: 'grupoCampoContrato',
        as: 'grupoCampoContrato',
        foreignKey: 'id_grupoCampoContrato',
    });
}


module.exports = ConfiguracaoMovimentacao;