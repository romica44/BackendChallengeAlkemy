var express = require('express');
var routeCharacters = require('./routes/characters')
var routeMovies = require('./routes/movies')
var logger = require('morgan')

var port = process.env.PORT || 8080;
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var sequelize = require('./sequelize/index');
sequelize.authenticate()
    .then(() => console.log('Sequelize succesfully connected to database'))
    .catch(err => console.error('Sequelize failed to connect to database', err))


app.use('/characters', routeCharacters)
app.use('/movies', routeMovies)

app.get('/authorized', function (req, res) {
    res.sendStatus(200)
});


app.listen(port);
