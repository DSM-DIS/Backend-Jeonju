const route = require('express').Router();

const DiaryBookRoute = require('./routes/diaryBook');

route.use('/diary-book', DiaryBookRoute.route);
route.use('/diary-books', DiaryBookRoute.route_books);

module.exports = route;
