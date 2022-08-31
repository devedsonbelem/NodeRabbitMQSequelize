const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const RetornoOperadora = connection.define("RetornoOperadora",{
    id_RetornoOperadora:{
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
    tableName: 'retorno_operadora',

});

RetornoOperadora.sync({force:true})

RetornoOperadora.associate = function (models) {
    RetornoOperadora.hasMany(models.Movimentacao, {
        through: 'movimentacao',
        as: 'movimentacao',
        foreignKey: 'id_movimentacao',
    });
}

RetornoOperadora.associate = function (models) {
    RetornoOperadora.hasOne(models.StatusRetornoOperadora, {
        through: 'statusRetornoOperadora',
        as: 'statusRetornoOperadora',
        foreignKey: 'id_statusRetornoOperadora',
    });
}

RetornoOperadora.associate = function (models) {
    RetornoOperadora.hasOne(models.SolicitacaoRetornoOperadora, {
        through: 'solicitacaoRetornoOperadora',
        as: 'solicitacaoRetornoOperadora',
        foreignKey: 'id_solicitacaoRetornoOperadora',
    });
}

module.exports = RetornoOperadora;