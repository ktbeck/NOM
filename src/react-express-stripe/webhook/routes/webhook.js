const stripe = require('../constants/stripe');
const firebase = require('firebase');
const config = require('../../../constants/firebase');

const webhookApi = app => {
  app.get('/', (req, res) => {
    res.send("hello webhook server");
  });

  app.post('/', (req, res) => {
	if(!firebase.apps.length) {
		firebase.initializeApp(config);
	}
	var ref = firebase.database().ref("stripe-events");
	console.log("post request made");
	ref.push({
		"unviewed": false,
		"event": req.body
	});
    res.sendStatus(200);
  });

  return app;
};

module.exports = webhookApi;

