const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const TipoMovimentacao =  connection.define("TipoMovimentacao", {
    id_tipoMovimentacao: {
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
    tableName: 'tipo_movimentacao',
});

TipoMovimentacao.sync({force: true})

TipoMovimentacao.associate = function (models) {
    TipoMovimentacao.hasMany(models.ConfiguracaoMovimentacao, {
            through: 'configuracaoMovimentacao',
            as: 'configuracaoMovimentacao',
            foreignKey: 'id_configuracaoMovimentacao',
    });
}


module.exports = TipoMovimentacao;