const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const StatusLoteMovimentacao = connection.define("StatusLoteMovimentacao",{
    id_StatusLoteMovimentacao:{
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
        defaultValue: sequelize.literal('ON UPDATE CURRENT_TIMESTAMP'),
        // defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: true
    }
},{
    underscored: false,
    freezeTableName: true,
    tableName: 'status_lote_movimentacao',

});

StatusLoteMovimentacao.sync({force:true})

StatusLoteMovimentacao.associate = function (models) {
    StatusLoteMovimentacao.hasMany(models.LoteMovimentacao, {
        through: 'loteMovimentacao',
        as: 'loteMovimentacao',
        foreignKey: 'id_loteMovimentacao',
    });
}

module.exports = StatusLoteMovimentacao;