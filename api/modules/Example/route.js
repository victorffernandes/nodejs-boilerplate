const _dir = process.cwd();
var { server } = require('nodejs-framework');

server.get('/test/:cpf', function (req, res, next) {
    res.send(200, 'Uhul');
    next();
});