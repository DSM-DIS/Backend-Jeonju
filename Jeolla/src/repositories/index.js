const { User, DiaryBook } = require('./definitions');


User.hasMany(DiaryBook, {foreignKey: "owner", sourceKey: "id"});
DiaryBook.belongsTo(User, {foreignKey: "owner", sourceKey: "id"});

module.exports = {
    User,
    DiaryBook,
}