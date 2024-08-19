const cron = require('node-cron');
const logger = require('../utils/logger');

cron.schedule('0 0 * * *', () => {
    logger.info('Running a daily task at midnight');
    // Add your task here
});

module.exports = cron;
