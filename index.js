require('./express').listen(9000, function() {
    console.log('Express started on port 9000');
});

require('./restify').listen(9001, function() {
    console.log('Restify started on port 9001');
});