const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:8080/payment'
  : 'http://localhost:8080/payment';

module.exports = PAYMENT_SERVER_URL;