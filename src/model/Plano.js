const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");


    const Plano = connection.define("Plano", {
        id_plano: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            notEmpty: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            validate:{
                len: [2,250],
            }
        },
        codigoANS: Sequelize.INTEGER,
        adicionais: Sequelize.STRING,
        formacaoDePreco: Sequelize.STRING,
        quantidadeVidas: Sequelize.INTEGER,
        valorTotal: Sequelize.DECIMAL,
        valorTotalTabela: Sequelize.DECIMAL,
        recorrenciaPromocaoMeses: Sequelize.STRING,
        indPromocional: Sequelize.STRING,
        indPossuiOpcional: Sequelize.BOOLEAN,
        id_fatorModerador: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //unique: true,
            notEmpty: true,
            //autoIncrement: true
        },
        id_cobertura: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //unique: true,
            notEmpty: true,
            //autoIncrement: true
        },
        id_areaAtuacao: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //unique: true,
            notEmpty: true,
            //autoIncrement: true
        },
        id_abrangenciaGeografica: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //unique: true,
            notEmpty: true,
            //autoIncrement: true
        },
        id_operadora: {
            type: Sequelize.INTEGER,
            allowNull: false,
            //unique: true,
            notEmpty: true,
            //autoIncrement: true
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
        tableName: 'plano',
    });

    Plano.sync({force: true})

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.TipoContratacao, {
            through: 'tipo_contratacao',
            as: 'tipoContratacao',
            foreignKey: 'id_tipoContratacao',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Acomodacao, {
            through: 'tipo_contratacao',
            as: 'tipoContratacao',
            foreignKey: 'id_acomodacao',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'tipo_contratacao',
            as: 'tipoContratacao',
            foreignKey: 'id_fatorModerador',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'cobertura',
            as: 'cobertura',
            foreignKey: 'id_cobertura',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'area_atuacao',
            as: 'areaAtuacao',
            foreignKey: 'id_areaAtuacao',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'abrangencia_geografica',
            as: 'abrangenciaGeografica',
            foreignKey: 'id_abrangenciaGeografica',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'operadora',
            as: 'operadora',
            foreignKey: 'id_operadora',
        });
    }

    module.exports = Plano;
