require('dotenv').config();



module.exports = {
    SERVER_PORT: process.env.SERVER_PORT,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_HOST: process.env.DB_HOST,
}



