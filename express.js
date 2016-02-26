const express = require('express');
const app     = express();

app.use(function(req, res, next) {
    Promise.resolve()
        .then(function() {
            next(); // next() does not throw error "Ooops"
        })
        .catch(function(err) {
            // we will not be here
            next(err);
        });
});

app.get('/', function(req, res, next) {
    throw new Error('Ooops');
});

// error will be handled here
app.use(function(err, req, res, next) {
    console.log('Express: error was handled. I am a winner! :)');
    res.status(500).send('Express: internal error ' + err.message);
});

module.exports = app;