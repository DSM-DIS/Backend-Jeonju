const { loadDatabase } = require('./database');
const loadExpressApp = require('./express');

module.exports = (app) => {
    await loadDatabase();
    loadExpressApp(app);
};