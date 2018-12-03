const paymentApi = require('./payment');
const webhookApi = require('./webhook');

const configureRoutes = app => {
  paymentApi(app);
  webhookApi(app);

};

module.exports = configureRoutes;
