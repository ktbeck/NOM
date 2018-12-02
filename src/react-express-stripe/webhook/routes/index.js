const webhookApi = require('./webhook');

const configureRoutes = app => {
  webhookApi(app);
};

module.exports = configureRoutes;
