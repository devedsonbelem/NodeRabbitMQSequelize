const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const SolicitacaoLoteMovimentacao = connection.define("SolicitacaoLoteMovimentacao",{
    id_SolicitacaoLoteMovimentacao:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true,
        autoIncrement: true
    },
    createdAt:{
        type : 'DATETIME DEFAULT CURRENT_TIMESTAMP' 
        // type: 'TIMESTAMP',
        // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        // allowNull: true
        },
    updatedAt:{
        type : 'DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' 
        // type: 'TIMESTAMP',                  
        // // defaultValue: sequelize.literal('ON UPDATE CURRENT_TIMESTAMP'),
        // defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        // allowNull: true
    }
},{
    underscored: false,
    freezeTableName: true,
    tableName: 'solicitacao_lote_movimentacao',

});

SolicitacaoLoteMovimentacao.sync({force:true})

SolicitacaoLoteMovimentacao.associate = function (models) {
    SolicitacaoLoteMovimentacao.hasOne(models.Usuario, {
        through: 'usuario',
        as: 'usuario',
        foreignKey: 'id_usuario',
    });
}
SolicitacaoLoteMovimentacao.associate = function (models) {
    SolicitacaoLoteMovimentacao.hasOne(models.Operadora, {
        through: 'operadora',
        as: 'operadora',
        foreignKey: 'id_operadora',
    });
}
SolicitacaoLoteMovimentacao.associate = function (models) {
    SolicitacaoLoteMovimentacao.hasMany(models.Entidade, {
        through: 'entidade',
        as: 'entidade',
        foreignKey: 'id_entidade',
    });
}
SolicitacaoLoteMovimentacao.associate = function (models) {
    SolicitacaoLoteMovimentacao.hasOne(models.Administradora, {
        through: 'administradora',
        as: 'administradora',
        foreignKey: 'id_administradora',
    });
}
SolicitacaoLoteMovimentacao.associate = function (models) {
    SolicitacaoLoteMovimentacao.hasOne(models.StatusSolicitacaoLoteMovimentacao, {
        through: 'statusSolicitacaoLoteMovimentacao',
        as: 'statusSolicitacaoLoteMovimentacao',
        foreignKey: 'id_statusSolicitacaoLoteMovimentacao',
    });
}
SolicitacaoLoteMovimentacao.associate = function (models) {
    SolicitacaoLoteMovimentacao.hasOne(models.TipoArquivoMovimentacao, {
        through: 'tipoArquivoMovimentacao',
        as: 'tipoArquivoMovimentacao',
        foreignKey: 'id_tipoArquivoMovimentacao',
    });
}
SolicitacaoLoteMovimentacao.associate = function (models) {
    SolicitacaoLoteMovimentacao.hasOne(models.LoteMovimentacao, {
        through: 'loteMovimentacao',
        as: 'loteMovimentacao',
        foreignKey: 'id_loteMovimentacao',
    });
}

module.exports = SolicitacaoLoteMovimentacao;