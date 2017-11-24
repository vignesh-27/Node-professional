var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));
app.use('/scripts', express.static('scripts'));

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/', function(req,res){
    res.render('home');
});

app.get('/career', function(req,res){
    res.render('career');
});

app.get('/home', function(req,res){
   res.render('home', {qs:req.query});
});

app.get('/contact', function(req,res){
    res.render('contact');
});

app.post('/contact', urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data:req.body});
});


app.get('/profile/:name', function(req,res){
    var data = {name: 'vicky', age: 29, designation: 'developer', hobbies:['Eating', 'Playing', 'Reading']};
    
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('your app running a port 3000');