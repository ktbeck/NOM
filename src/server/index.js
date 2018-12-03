const express = require('express');
const path = require('path');

const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../../build')});
});


configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});
