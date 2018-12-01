import React, { Component } from 'react';

import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var http = require("http");

http.createServer(function(request, response) {
	
	if (request.method === "POST") {
		// TODO: redundant but i need this to work now
		const config = {
		    apiKey: "AIzaSyBJP2J1ZLauCJDQHE0RGcxHAhlA9O3fFGY",
		    authDomain: "nom-cc25c.firebaseapp.com",
		    databaseURL: "https://nom-cc25c.firebaseio.com",
		    projectId: "nom-cc25c",
		    storageBucket: "nom-cc25c.appspot.com",
		    messagingSenderId: "922157362655",
		};

		if(!firebase.apps.length) {
			firebase.initializeApp(config);
		}
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