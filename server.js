#!/usr/bin/env node

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = normalizePort(process.env.PORT || '3000');

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

// socket.io
io.on('connection', function (socket) {
    socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', {msg: msg});
  });
});

app.set('port', port);
http.listen(port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}