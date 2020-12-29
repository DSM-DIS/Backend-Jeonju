const { getRandomString } = require('../utils/Random');


// todo add exceptions, this code is currently not safe with exceptions.


class DiaryBookService {
    constructor(diary_repo) {
        this.diary_repo = diary_repo;
        this.generateCode = () => {
            return getRandomString(6, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        }
    }

    setCodeGenerator(generator) {
        this.generateCode = generator;
    }

    async create(leader, diary_name) {
        let flag = true;
        //while(flag) {
            const invite_code = this.generateCode();
            console.log(leader, invite_code);
            try {
                await this.diary_repo.create({
                    name: diary_name, 
                    code: invite_code,
                    owner: leader,
                });
                flag = false;
                return invite_code;
            } catch (e) {
                console.log(e);
            }
        //}

    }

    async changeOwner(diary_id, new_owner) {
        await this.diary_repo.update({owner: new_owner}, {where: {
            id: diary_id
        }});
    }

    async getById(diary_id) {
        console.log(diary_id);
        const diary_book = await this.diary_repo.findOne({where: {
            id: diary_id
        }});

        return diary_book.dataValues;
    }

}


module.exports = {
    DiaryBookService
}