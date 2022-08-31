const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Administradora = connection.define("Administradora",{
    id_administradora: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        // unique: true,
        // notEmpty: true, 
        autoIncrement: true
    },
    codigoANS: Sequelize.STRING,
    site: Sequelize.STRING,
    telefone: Sequelize.STRING,
    cnpj: Sequelize.STRING,
    nomeFantasia: Sequelize.STRING,
    razaoSocial: Sequelize.STRING,
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
    tableName: 'administradora',
        

});
Administradora.sync({force: false})

Administradora.associate = function (models) {
    Administradora.hasMany(models.SolicitacaoLoteMovimentacao, {
            through: 'solicitacaoLoteMovimentacao',
            as: 'solicitacaoLoteMovimentacao',
            foreignKey: 'id_solicitacaoLoteMovimentacao',
    });
}

module.exports = Administradora;