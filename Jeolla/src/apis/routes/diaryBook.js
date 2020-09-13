const route = require('express').Router();


const { DiaryBookService } = require('../../services/diaryBook');
const { DiaryBook } = require('../../repositories');
const diary_book_service = new DiaryBookService(DiaryBook);


route.post('/', async (req, res) => {
    const leader = req.body.leader;
    const diary_name = req.body.diary_name;

    const invite_code = await diary_book_service.create(leader, diary_name);

    const result = {
        invite_code: invite_code
    };
    res.json(result);
});

route.patch('/owner', async (req, res) => {
    const diary_book_id = req.body.diary_book_id;    
    const new_owner = req.body.new_owner;

    await diary_book_service.changeOwner(diary_book_id, new_owner);
    
    res.send("success");
});


module.exports = route;