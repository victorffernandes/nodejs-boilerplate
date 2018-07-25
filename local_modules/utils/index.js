var config  = require('./config');
var middlewares = require('./middlewares');
var router = require('./router');
var server = require('./server');

module.exports = {
    config,
    router,
    server
};