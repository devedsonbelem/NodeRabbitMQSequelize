const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const SolicitacaoRetornoLoteMovimentacao = connection.define("SolicitacaoRetornoLoteMovimentacao",{
    id_SolicitacaoRetornoLoteMovimentacao:{
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
    tableName: 'solicitacao_retorno_lote_movimentacao',

});

SolicitacaoRetornoLoteMovimentacao.sync({force:true})

module.exports = SolicitacaoRetornoLoteMovimentacao;