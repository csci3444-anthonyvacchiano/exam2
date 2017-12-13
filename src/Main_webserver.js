var express = require('express');
var myPower = require('./common/util/math/mypower.js');

var app = express();


app.set('views', './views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'how to use cubes and squares' },
        name: 'Anthony',
        lastname: 'Vacchiano'
    };
    res.render('../views/pages/home.ejs', data2template);
});




app.get('/square', function(req, res) {
    var inpNumber = 2;
    var data2template = {
        head: { title: 'Square Page' },
        inpNumber: inpNumber,
        resultNumber: myPower.tosquare(inpNumber)
    };
    res.render('../views/pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var CubeNumber = 3;
    var data2template = {
        head: { title: 'Cube Page' },
        inpNumber: CubeNumber,
        resultNumber: myPower.tocube(CubeNumber)
    };
    res.render('../views/pages/cube.ejs', data2template);
});

app.get('/about', function(req, res) {
    res.status(200).render('../views/pages/about.html');
});
app.get('/*', function(req, res) {
    res.status(404).render('../views/pages/error.ejs', { head: { title: 'Error' } });
});


var server = app.listen(9015, function() {
    console.log(
        'express app, Exam Section 2, started and listening at http://localhost:9015/',
        server.address().address,
        server.address().port);
});