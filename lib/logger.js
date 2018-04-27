var winston = require('winston'),
    config = null;

const defaultConfig = {
    appName: 'Unnamed'
};

module.exports = {

    configure: function(configObj) {
        config = configObj || defaultConfig;

        winston.remove(winston.transports.Console);

        winston.add(winston.transports.Console, {
            level: 'debug',
            colorize: true
        });
    },

    log: winston

};
