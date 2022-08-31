const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Entidade = connection.define("Entidade", {
    id_entidade: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true,
        autoIncrement: true
    },
    sigla: Sequelize.STRING,
    nome: {
        type: Sequelize.STRING,
        validate: {
            len: [2, 250],
        }
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
    tableName: 'entidade',
});
Entidade.sync({ force: false })

Entidade.associate = function (models) {
    Entidade.hasMany(models.SolicitacaoLoteMovimentacao, {
        through: 'solicitacaoLoteMovimentacao',
        as: 'solicitacaoLoteMovimentacao',
        foreignKey: 'id_solicitacaoLoteMovimentacao',
    });
}

module.exports = Entidade;