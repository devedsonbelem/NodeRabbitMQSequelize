const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const SolicitacaoRetornoOperadora = connection.define("SolicitacaoRetornoOperadora",{
    id_SolicitacaoRetornoOperadora:{
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
    tableName: 'solicitacao_retorno_operadora',

});

SolicitacaoRetornoOperadora.sync({force:true})

SolicitacaoRetornoOperadora.associate = function (models) {
    SolicitacaoRetornoOperadora.hasOne(models.Operadora, {
        through: 'operadora',
        as: 'operadora',
        foreignKey: 'id_operadora',
    });
}

SolicitacaoRetornoOperadora.associate = function (models) {
    SolicitacaoRetornoOperadora.hasOne(models.Usuario, {
        through: 'usuario',
        as: 'usuario',
        foreignKey: 'id_usuario',
    });
}

SolicitacaoRetornoOperadora.associate = function (models) {
    SolicitacaoRetornoOperadora.hasOne(models.LoteMovimentacao, {
        through: 'loteMovimentacao',
        as: 'loteMovimentacao',
        foreignKey: 'id_loteMovimentacao',
    });
}
SolicitacaoRetornoOperadora.associate = function (models) {
    SolicitacaoRetornoOperadora.hasOne(models.RetornoOperadora, {
        through: 'retornoOperadora',
        as: 'retornoOperadora',
        foreignKey: 'id_retornoOperadora',
    });
}

module.exports = SolicitacaoRetornoOperadora;