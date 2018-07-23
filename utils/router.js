var glob = require('glob');

class Router {
    importRoutes(){
        glob("./api/modules/**/route.js", function(er, files) {
            files.forEach((rout) => {
                const path = "./."+rout
                console.log('Requiring '+ path);
                require(path);
            });
        });
    }
}

module.exports = new Router();