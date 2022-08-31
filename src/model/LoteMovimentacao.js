const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const LoteMovimentacao = connection.define("LoteMovimentacao",{
    id_LoteMovimentacao:{
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
    tableName: 'lotemovimentacao',

});

LoteMovimentacao.sync({force:true})

LoteMovimentacao.associate = function (models) {
    LoteMovimentacao.hasOne(models.SolicitacaoRetornoOperadora, {
        through: 'solicitacaoRetornoOperadora',
        as: 'solicitacaoRetornoOperadora',
        foreignKey: 'id_solicitacaoRetornoOperadora',
    });
}

LoteMovimentacao.associate = function (models) {
    LoteMovimentacao.hasOne(models.StatusLoteMovimentacao, {
        through: 'statusLoteMovimentacao',
        as: 'statusLoteMovimentacao',
        foreignKey: 'id_statusLoteMovimentacao',
    });
}

LoteMovimentacao.associate = function (models) {
    LoteMovimentacao.hasMany(models.Movimentacao, {
        through: 'movimentacao',
        as: 'movimentacao',
        foreignKey: 'id_statusLoteMovimentacao',
    });
}

module.exports = LoteMovimentacao;