const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");


    const Supervisor = connection.define("Supervisor", {

        id_supervisor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            notEmpty: true,
            autoIncrement: true
        },
        id_corretor: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            notEmpty: true,
            
        },
        id_corretora: {
            type:Sequelize.INTEGER,
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
        tableName: 'supervisor',
    });

    Supervisor.sync({force: true})

    Supervisor.associate = function (models) {
        Supervisor.belongsToMany(models.Corretor, {
            through: 'corretor',
            as: 'corretor',
            foreignKey: 'id_corretor',
        });
    }

    Supervisor.associate = function (models) {
        Supervisor.belongsToMany(models.Corretora, {
            through: 'corretora',
            as: 'corretora',
            foreignKey: 'id_corretora',
        });
    }

    module.exports = Supervisor;
