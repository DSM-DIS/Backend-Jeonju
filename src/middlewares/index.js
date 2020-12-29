const logger = require('../utils/logger');

const log_entry_res = (req, res, next) => {
    logger.log(`${req.method} ${req.originalUrl} ${req.body}`);
    next();
};

module.exports = {
    log_entry_res
};