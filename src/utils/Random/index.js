function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + 1) + min;
}


function getRandomString(length, candidate_chars) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += candidate_chars[getRandomInt(0, candidate_chars.length - 1)];
    }
    return result;
}



module.exports = {
    getRandomInt,
    getRandomString
}