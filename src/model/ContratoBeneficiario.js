const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");


const ContratoBeneficiario = connection.define("ContratoBeneficiario", {

        id_contratoBeneficiario: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                unique: true,
                notEmpty: true,
                autoIncrement: true
        },
        dataVigencia: {
                type: Sequelize.DATEONLY,
                isDate: true,
        },
        dataVencimento: {
                type: Sequelize.DATEONLY,
                isDate: true,

        },
        valorTotal: Sequelize.DECIMAL,
        valorTaxaAssociativa: Sequelize.DECIMAL,
        valorTotalMensal: Sequelize.DECIMAL,
        numeroProposta: Sequelize.INTEGER,
        qtdRecorrenciaAnualTaxaAssociativa: Sequelize.INTEGER,
        descricaoRecorrenciaTaxaAssociativa: Sequelize.TEXT,
        id_subcontrato: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
        },
        id_contrato: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
        },
        id_operadora: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
        },
        id_entidade: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
        },
        id_titular: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
        },
        id_corretora: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
        },
        id_administradora: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
        },
        id_corretor: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                unique: true,
                notEmpty: true,

        },
        id_supervisor: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                notEmpty: true,
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
        tableName: 'contrato_beneficiario',
});

ContratoBeneficiario.sync({ force: true })

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Subcontrato, {
                through: 'subcontrato',
                as: 'subcontrato',
                foreignKey: 'id_subcontrato',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Contrato, {
                through: 'contrato',
                as: 'contratos',
                foreignKey: 'id_contrato',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Operadora, {
                through: 'operadora',
                as: 'operadora',
                foreignKey: 'id_operadora',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Entidade, {
                through: 'entidade',
                as: 'entidades',
                foreignKey: 'id_entidade',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Plano, {
                through: 'plano',
                as: 'plano',
                foreignKey: 'id_plano',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Titular, {
                through: 'titular',
                as: 'titular',
                foreignKey: 'id_titular',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Corretora, {
                through: 'corretora',
                as: 'corretora',
                foreignKey: 'id_corretora',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Administradora, {
                through: 'administradora',
                as: 'administradora',
                foreignKey: 'id_administradora',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Corretor, {
                through: 'corretor',
                as: 'corretor',
                foreignKey: 'id_corretor',
        });
}

ContratoBeneficiario.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Supervisor, {
                through: 'supervisor',
                as: 'supervisor',
                foreignKey: 'id_supervisor',
        });
}


module.exports = ContratoBeneficiario;


