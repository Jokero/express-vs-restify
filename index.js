require('./express').listen(9000, function() {
    console.log('Express started');
});

require('./restify').listen(9001, function() {
    console.log('Restify started');
});