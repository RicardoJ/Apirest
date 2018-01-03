const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var cookie = require('cookie-parser');
const indexRoutes = require('./routes/index.js');
const providers = require('./routes/providersCL');

//settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookie());
//routes
app.use('/', indexRoutes);
app.use('/providersCL',providers);
//listen
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('SERVER RUN');
});
 
module.exports = app;