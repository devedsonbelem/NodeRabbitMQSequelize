const AbrangenciaGeografica = require("./AbrangenciaGeografica");
const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");


const Movimentacao = connection.define("Movimentacao", {
    id_movimentacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        notEmpty: true,
        autoIncrement: true
    },
    corretora: Sequelize.STRING,
    supervisor: Sequelize.STRING,
    corretor: Sequelize.STRING,
    cpfTitular: {
        type: Sequelize.STRING,
        validate: {
            is: ["/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"],
            allowNull: {
                msg: 'Por favor insira o cpf do titular'
            }
        }
    },
    nomeCompletoTitular: {
        type: Sequelize.STRING,
        validate:{
            len: [2,100],
        }
    },
    dataNascimentoTitular: {
        type: Sequelize.DATEONLY,
        isDate: true,

    },
    nomeMaeTitular: {
        type: Sequelize.STRING,
        validate:{
            len: [2,100],
        }
    },
    sexoTitular: {
        type:Sequelize.ENUM('M','F')

    },
    estadoCivilTitular: Sequelize.STRING,
    rg: {
        type: Sequelize.STRING,
        validate: {
            is: ["(?=.*\d)[0-9]{1,11}"],
            allowNull: {
                msg: 'Por favor insira o rg'
            }
        }
    },
    orgaoEmissorRgTitular: Sequelize.STRING,
    cnsTitular: Sequelize.STRING,
    dnvTitular: Sequelize.STRING,
    emailTitular:{
        type:Sequelize.STRING,
        validate:{
            isEmail: true,
        }
    },
    telefoneTitular: {
        type:Sequelize.STRING,
        // validade:{
        //     max: 09,
        //     min:8
        // }
    },
    telefoneFixo: {
        type:Sequelize.STRING,
        // validade:{
        //     max: 09,
        //     min:8
        // }
    },
    cepTitular: {
        type: Sequelize.STRING,
        validate: {
            is: ["[0-9]{5}-[\d]{3}"],
            allowNull: {
                msg: 'Por favor insira o cep da titular'
            }
        }
    },
    logradouroTitular: Sequelize.STRING,
    numeroTitular: Sequelize.INTEGER,
    complementoTitular: Sequelize.STRING,
    bairroTitular: Sequelize.STRING,
    estadoTitular: Sequelize.STRING,
    cidadeTitular: Sequelize.STRING,
    cpfDependente: {
        type: Sequelize.STRING,
        validate: {
            is: ["/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"],
            allowNull: {
                msg: 'Por favor insira o cpf do dependente'
            }
        }
    },
    nomeCompletoDependente: {
        type: Sequelize.STRING,
        validate:{
            len: [2,250],
        }
    },
    dataNascimentoDependente: {
        type: Sequelize.DATEONLY,
        isDate: true,

    },
    sexoDependente: {
        type:Sequelize.ENUM('M','F')

    },
    estadoCivilDependente: Sequelize.STRING,
    grauParentescoDependente: Sequelize.STRING,
    cnsDependente: Sequelize.STRING,
    dnvDependente: Sequelize.STRING,
    cpfResponsavelFinanceiro: {
        type: Sequelize.STRING,
        validate: {
            is: ["/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"],
            allowNull: {
                msg: 'Por favor insira o cpf do responsavel financeiro'
            }
        }
    },
    nomeCompletoResponsavelFinanceiro: {
        type: Sequelize.STRING,
        validate:{
            len: [2,250],
        }
    },
    dataNascimentoResponsavelFinanceiro: {
        type: Sequelize.DATEONLY,
        isDate: true,

    },
    rgResponsavelFinanceiro: {
        type: Sequelize.STRING,
        validate: {
            is: ["(?=.*\d)[0-9]{1,11}"],
            allowNull: {
                msg: 'Por favor insira o rg do responsavel'
            }
        }
    },
    orgaoEmissorResponsavelFinanceiro: Sequelize.STRING,
    grauParentescoResponsavelFinanceiro: Sequelize.STRING,
    entidadeXOperadora: Sequelize.STRING,
    plano: Sequelize.STRING,
    dataVigenciaMensal: {
        type: Sequelize.DATEONLY,
        isDate: true,

    },
    dataVencimentoMensal: {
        type: Sequelize.DATEONLY,
        isDate: true,

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
    tableName: 'movimentacao',
});

// Movimentacao.hasMany(modelo_a_ser_relacionado);
Movimentacao.sync({ force: true })

// Movimentacao.associate = function (models) {
//     Movimentacao.hasMany(models.LoteMovimentacao, {
//         through: 'movimentacao',
//         as: 'movimentacao',
//         foreignKey: 'id_movimentacao',
//     });
// }
Movimentacao.associate = function (models) {
    Movimentacao.hasOne(models.TipoMovimentacao, {
        through: 'tipoMovimentacao',
        as: 'tipoMovimentacao',
        foreignKey: 'id_tipoMovimentacao',
    });
}
Movimentacao.associate = function (models) {
    Movimentacao.hasOne(models.Beneficiario, {
        through: 'beneficiario',
        as: 'beneficiario',
        foreignKey: 'id_beneficiario',
    });
}
Movimentacao.associate = function (models) {
    Movimentacao.hasMany(models.RetornoOperadora, {
        through: 'retornoOperadora',
        as: 'retornoOperadora',
        foreignKey: 'id_retornoOperadora',
    });
}


module.exports = Movimentacao;


