var express = require('express'),
	routes = require('./router'),
	bodyParser = require('body-parser'),
	server = express()

// Config

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());


// Routes

server.get('/', routes.index);
server.get('/partials/:name', routes.partials);
server.post('/api/buy', routes.purchase);
server.get('/purchases', routes.getPurchaes);
server.post('/mail', routes.sendMail);
server.get('/*', routes.index);


// Server

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})