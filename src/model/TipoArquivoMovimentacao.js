const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const TipoArquivoMovimentacao = connection.define("TipoArquivoMovimentacao",{
    id_TipoArquivoMovimentacao:{
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
    tableName: 'tipo_arquivo_movimentacao',

});

TipoArquivoMovimentacao.sync({force:true})

TipoArquivoMovimentacao.associate = function (models) {
    TipoArquivoMovimentacao.hasMany(models.SolicitacaoLoteMovimentacao, {
        through: 'solicitacaoLoteMovimentacao',
        as: 'solicitacaoLoteMovimentacao',
        foreignKey: 'id_solicitacaoLoteMovimentacao',
    });
}

module.exports = TipoArquivoMovimentacao;