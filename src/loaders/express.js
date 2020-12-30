const express = require('express');
const cors = require('cors');

const middlewares= require('../middlewares');
const apis = require('../apis');

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(middlewares.log_entry_res);

    app.use('/repositories/', apis);
};



