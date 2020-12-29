const route = require('express').Router();
const route_books = require('express').Router();

const { DiaryBookService } = require('../../services/diaryBook');
const { DiaryBook } = require('../../repositories');
const diary_book_service = new DiaryBookService(DiaryBook);


route.post('/', async (req, res) => {
    const maker = req.body.maker;
    const name = req.body.name;

    const invite_code = await diary_book_service.create(maker, name);

    const result = {
        invite_code: invite_code
    };
    res.json(result);
});

route_books.patch('/owner', async (req, res) => {
    const diary_book_id = req.body.diary_book_id;    
    const new_owner = req.body.new_owner;

    await diary_book_service.changeOwner(diary_book_id, new_owner);
    
    res.send("success");
});

route_books.get('/:id', async (req, res) => {
    const diary_book_id = req.params.id;

    res.send(await diary_book_service.getById(diary_book_id));
});

module.exports = { 
    route,
    route_books
};