var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var object = [
    {
    "application": "Google Chrome",
    "keycount": "39",
    "timespent": "177"
    },
    {
    "application": "Skype",
    "keycount": "1",
    "timespent": "0"
    },
    {
    "application": "Google Chrome",
    "keycount": "2",
    "timespent": "1"
    },
    {
    "application": "Code",
    "keycount": "1",
    "timespent": "188"
    }
    ];

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));
app.use('/scripts', express.static('scripts'));

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/', function(req,res){
    
    var person = {};

    for(var i=0; i<object.length; i++){

        var temp = object[i].application;
        
        if(person.hasOwnProperty(temp)) {
            person[temp].keycount = parseInt(person[temp].keycount) + parseInt(object[i].keycount);
            person[temp].timespent = parseInt(person[temp].timespent) + parseInt(object[i].timespent);
        }else{
        person[temp] = object[i];
        delete person[temp].application;
        }
    }
    res.json(person);
});


app.listen(4000);
console.log('your app running a port 4000');