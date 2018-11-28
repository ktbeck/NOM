import firebase from 'firebase/app';

var http = require("http");

http.createServer(function(request, response) {
	
	if (request.method === "POST") {
		var ref = firebase.database().ref("stripe-events");
		request.on('data', chunk => {
			var json = {
				"unviewed": false,
				"event": JSON.parse(chunk),
			};
			ref.push(json);
		});
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end();
	}
	else
		response.writeHead(404, 'Resource Not found', {'Content-Type': 'text/html'});
}).listen(8081);

// run this node server on localhost with ngrok http tunneling
// ./ngrok http 8081