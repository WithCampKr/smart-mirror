var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var path = require('path');

//  set up the template engine
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/'));
app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get( '*', function(req, res) {
  res.writeHead( 404, { "Content-Type": "application/json" } );
  res.end(JSON.stringify({code: 404, info: "not found"}) + "\n" );
} );

app.listen(port);
