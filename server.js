var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();
var port = 9090;
var corsOptions = {
    origin: 'http://localhost:9090'
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));

app.post('/api/login', userCtrl.login);

app.listen(port, function() {
    console.log('Listening on port ' + port);
});