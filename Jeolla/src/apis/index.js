const route = require('express').Router();

const DiaryBookRoute = require('./routes/diaryBook');

route.use('/diary-book', DiaryBookRoute);

module.exports = route;
