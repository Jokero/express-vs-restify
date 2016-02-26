const restify = require('restify');
const server  = restify.createServer();

server.use(function(req, res, next) {
    Promise.resolve()
        .then(function() {
            next(); // next() throws error "Ooops"
        })
        .catch(function(err) {
            console.log('Restify: we are in catch handler. Error will not be handled...');
            next(err);
        })
});

server.get('/', function(req, res, next) {
    throw new Error('Ooops');
});

server.on('uncaughtException', function(req, res, route, err) {
    res.send(500, 'Restify: internal error ' + err.message);
});

module.exports = server;