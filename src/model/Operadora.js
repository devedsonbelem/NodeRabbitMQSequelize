const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Operadora =  connection.define("Operadora", {
    id_operadora: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true,
        autoIncrement: true
    },
    
    cnpj: {
        type: Sequelize.STRING,
        validate: {
            is: ["/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/"],
            allowNull: {
                msg: 'Por favor insira o cnpj'
            }
        }
    },
    nome: {
        type: Sequelize.STRING,
        validate:{
            len: [2,250],
        }
    },
    
    site: {
        type: Sequelize.STRING,
        isUrl:true
    },
    telefone: Sequelize.STRING,
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
    tableName: 'operadora',
});
Operadora.sync({force: true})

Operadora.associate = function (models) {
    Operadora.hasMany(models.SolicitacaoRetornoOperadora, {
            through: 'solicitacaoRetornoOperadora',
            as: 'solicitacaoRetornoOperadora',
            foreignKey: 'id_solicitacaoRetornoOperadora',
    });
}
Operadora.associate = function (models) {
    Operadora.hasMany(models.ConfiguracaoMovimentacao, {
            through: 'configuracaoMovimentacao',
            as: 'configuracaoMovimentacao',
            foreignKey: 'id_configuracaoMovimentacao',
    });
}
Operadora.associate = function (models) {
    Operadora.hasMany(models.SolicitacaoLoteMovimentacao, {
            through: 'solicitacaoLoteMovimentacao',
            as: 'solicitacaoLoteMovimentacao',
            foreignKey: 'id_solicitacaoLoteMovimentacao',
    });
}

module.exports = Operadora;