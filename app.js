var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/scripts'));


app.get('/', function(req,res){
    res.render('index');
});

app.get('/career', function(req,res){
    res.render('career');
});


app.get('/profile/:name', function(req,res){
    var data = {name: 'vicky', age: 29, designation: 'developer', hobbies:['Eating', 'Playing', 'Reading']};
    
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('your app running a port 3000');