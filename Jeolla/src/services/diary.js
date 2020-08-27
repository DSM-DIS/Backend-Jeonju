const { getRandomString } = require('../utils/Random');


class DiaryService {
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
        while(flag) {
            const invite_code = this.generateCode();
            
            try {
                await this.diary_repo.create({
                    name: diary_name, 
                    code: invite_code,
                    owner: leader,
                });
                flag = false;
            } catch (e) {
                console.log(e);
            }
        }

    }


}


module.exports = {
    DiaryService
}