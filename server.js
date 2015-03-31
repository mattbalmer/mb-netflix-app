var express = require('express'),
    path = require('path'),
    config = { port: process.env.PORT || 3000 };
var app = express();

app.use(express.static( path.join(__dirname, 'public') ));
app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, 'public', 'index.html'));
});

app.listen(config.port, function () {
    console.log("Express server listening on port %d", config.port);
});