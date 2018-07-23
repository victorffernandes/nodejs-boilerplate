var server = require('./utils/server').getServer();
var router = require('./utils/router');

server.listen(8090, function(){
    router.importRoutes(server);
    console.log('Aplicação está funcionando');
});

server.get('/', function(req, res, next) {
    res.send(200, 'Nodejs BoilerPlate is working!');
    next();
});