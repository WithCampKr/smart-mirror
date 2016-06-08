var express = require( 'express' );
var app = express();
var port = process.env.PORT || 80;

var path = require( 'path' );

//  set up the template engine
app.set( 'view engine', 'html' );
app.set( 'views', path.join( __dirname, '/' ) );
app.use( express.static( path.join( __dirname, '/' ) ) );

app.get( '/', function( req, res ) {
  res.render( 'index.html' );
} );

app.get( '*', fourOhFour );
function fourOhFour( req, res ) {
  res.writeHead( 404, { "Content-Type": "application/json" } );
  res.end( JSON.stringify( new Error( "invalid" ) ) + "\n" );
}

app.listen( port );