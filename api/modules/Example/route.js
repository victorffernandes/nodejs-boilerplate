var server = require('./../../../utils/server').getServer();

server.get('/test/:cpf', function(req, res, next){
    res.send(200, 'Uhul');
    next();
});