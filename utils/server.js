
var restify = require('restify');
var middlewares = require('./middlewares');

class Server {
    constructor() {
        if (!Server.server)
            Server.server = restify.createServer();
        this.configureServer();
    }

    configureServer() {
        middlewares.forEach((middleware) => {
            Server.server.use(middleware);
        });
    }

    getServer() {
        return Server.server;
    }
}
module.exports = new Server();