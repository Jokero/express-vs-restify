require('./lib/express').listen(9000, function() {
    console.log('Express started');
});

require('./lib/restify').listen(9001, function() {
    console.log('Restify started');
});