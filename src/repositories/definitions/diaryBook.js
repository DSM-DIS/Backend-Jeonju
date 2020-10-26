const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../loaders/database');

class DiaryBook extends Model { }

DiaryBook.init({
    id: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
    code: {
        type: DataTypes.CHAR(6),
        allowNull: false,
    },
    owner: {
        type: DataTypes.STRING(12),
        allowNull: false,
    }
}, 
{
    sequelize, 
    tableName: 'diary_book'
});

module.exports = DiaryBook;