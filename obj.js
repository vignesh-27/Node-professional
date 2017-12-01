var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var object = [
    {
    "website": "a-broker-asse-01-skype.cloudapp.net",
    "count": "7"
    },
    {
    "website": "notifications.google.com",
    "count": "1"
    },
    {
    "website": "play.google.com",
    "count": "1"
    },
    {
    "website": "kye.thehub.ai",
    "count": "1"
    },
    {
    "website": "b._dns-sd._udp.0.0.168.192.in-addr.arpa",
    "count": "1"
    },
    {
    "website": "db._dns-sd._udp.0.0.168.192.in-addr.arpa",
    "count": "1"
    },
    {
    "website": "lb._dns-sd._udp.0.0.168.192.in-addr.arpa",
    "count": "1"
    },
    {
    "website": "b._dns-sd._udp.domain.name",
    "count": "1"
    },
    {
    "website": "chat.3.basecamp.com",
    "count": "1"
    },
    {
    "website": "3.basecamp.com",
    "count": "1"
    },
    {
    "website": "3.basecamp.com",
    "count": "4"
    },
    ];
    

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));
app.use('/scripts', express.static('scripts'));

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/', function(req,res){
    
     var  person = {};
    for( var i=0 ; i< object.length; i++){
        if(person.hasOwnProperty(object[i].website)) {
           person[object[i].website] = parseInt(person[object[i].website]) + parseInt(object[i].count) ;
        }else{
            person[object[i].website] = object[i].count;
        }
    }
    res.json(person);
});


app.listen(4000);
console.log('your app running a port 4000');