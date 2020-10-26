const express = require('express');
const cors = require('cors');

const apis = require('../apis');

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());


    app.use(apis);
};



