if(process.env.NODE_ENV == 'dev') {
    require('dotenv').config();
}

module.exports = {
    SERVER_PORT: parseInt(process.env.SERVER_PORT),
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_HOST: process.env.DB_HOST,
}



