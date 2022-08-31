const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const StatusRetornoOperadora = connection.define("StatusRetornoOperadora",{
    id_StatusRetornoOperadora:{
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
    tableName: 'status_retorno_operadora',

});

StatusRetornoOperadora.sync({force:true})

StatusRetornoOperadora.associate = function (models) {
    StatusRetornoOperadora.hasMany(models.RetornoOperadora, {
        through: 'retornoOperadora',
        as: 'retornoOperadora',
        foreignKey: 'id_retornoOperadora',
    });
}

module.exports = StatusRetornoOperadora;