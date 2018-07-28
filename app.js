var {server, router, config} = require('framework');

server.listen(config.port, function(){
    router.importRoutes(server);
    console.log('Aplicação está funcionando na porta '+config.port);
});

server.get('/', function(req, res, next) {
    res.send(200, 'Nodejs BoilerPlate is working! 1');
    next();
});
module.exports = server;