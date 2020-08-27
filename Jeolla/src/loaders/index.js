const { loadDatabase } = require('./database');
const loadExpressApp = require('./express');

module.exports = async (app) => {
    await loadDatabase();
    loadExpressApp(app);
};