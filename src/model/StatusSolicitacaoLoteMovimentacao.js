const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const StatusSolicitacaoLoteMovimentacao = connection.define("StatusSolicitacaoLoteMovimentacao",{
    id_StatusSolicitacaoLoteMovimentacao:{
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
    tableName: 'status_solicitacao_lote_movimentacao',

});

StatusSolicitacaoLoteMovimentacao.sync({force:true})

StatusSolicitacaoLoteMovimentacao.associate = function (models) {
    StatusSolicitacaoLoteMovimentacao.hasMany(models.SolicitacaoLoteMovimentacao, {
        through: 'solicitacaoLoteMovimentacao',
        as: 'solicitacaoLoteMovimentacao',
        foreignKey: 'id_solicitacaoLoteMovimentacao',
    });
}

module.exports = StatusSolicitacaoLoteMovimentacao;