const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");


    const Titular = connection.define("Titular", {

        id_titular: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            notEmpty: true,
            autoIncrement: true

        },
        cpf: {
            type: Sequelize.STRING,
            validate: {
                is: ["/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"],
                // allowNull:false
                allowNull: {
                    msg: 'Por favor insira seu cpf'
                }
            }
        },
        rg: {
            type: Sequelize.STRING,
            validate: {
                is: ["(?=.*\d)[0-9]{1,11}"],
                allowNull: {
                    msg: 'Por favor insira o rg'
                }
            }
        },
        nome: {
            type: Sequelize.STRING,
            validate:{
                len: [2,250],
            }
        },
        dataNascimentoTitular: {
            type: Sequelize.DATEONLY,
            isDate: true,
    
        },
        nomeMae: {
            type: Sequelize.STRING,
            validate:{
                len: [2,250],
            }
        },
        sexo: {
            type:Sequelize.ENUM('M','F')
    
        },
        cns: Sequelize.STRING,
        dnv: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true,
            }
    
        },
        dddTelefone: {
            type: Sequelize.INTEGER,
            validate:{
                max:2,
                min:2
            }
        },
        numTelefone:{
            type: Sequelize.STRING,
            // validate:{
            //     max:8,
            //     min:8
            // }

        },
        dddCelular:{
            type: Sequelize.INTEGER,
            validate:{
                max:2,
                min:2
            }
        },
        numCelular:{
            type: Sequelize.STRING,
            // validate:{
            //     max:8,
            //     min:8
            // }

        },
        valor: Sequelize.DECIMAL,
        idade: Sequelize.INTEGER,
        numeroCarteirinha: Sequelize.STRING,
        representanteLegal: Sequelize.STRING,
        carencia: Sequelize.STRING,
        id_estadoCivil:{
            type: Sequelize.INTEGER,
            validate:{
                allowNull: false,
                unique: true,
                notEmpty: true,
                autoIncrement: true
            }
        },
        id_orgaoEmissor:{
            type: Sequelize.INTEGER,
            validate:{
                allowNull: false,
                unique: true,
                notEmpty: true,
                autoIncrement: true
            }
        },
        id_endereco:{
            type: Sequelize.INTEGER,
            validate:{
                allowNull: false,
                unique: true,
                notEmpty: true,
                autoIncrement: true
            }
        },
        id_dependente:{
            type: Sequelize.INTEGER,
            validate:{
                allowNull: false,
                unique: true,
                notEmpty: true,
                autoIncrement: true
            }
        },
        id_profissao:{
            type: Sequelize.INTEGER,
            validate:{
                allowNull: false,
                unique: true,
                notEmpty: true,
                autoIncrement: true
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
        tableName: 'titular',
    });

    Titular.sync({force: true})

    Titular.associate = function (models) {
        Titular.belongsTo(models.EstadoCivil, {
            through: 'estado_civil',
            as: 'estadoCivil',
            foreignKey: 'id_estadoCivil',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsTo(models.OrgaoEmissor, {
            through: 'orgaoEmissor',
            as: 'orgaoEmissor',
            foreignKey: 'id_orgaoEmissor',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsTo(models.Endereco, {
            through: 'endereco',
            as: 'endereco',
            foreignKey: 'id_endereco',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsToMany(models.Dependente, {
            through: 'dependente',
            as: 'dependente',
            foreignKey: 'id_dependente',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsTo(models.Profissao, {
            through: 'profissao',
            as: 'profissao',
            foreignKey: 'id_profissao',
        });
    }

    

    module.exports = Titular;
