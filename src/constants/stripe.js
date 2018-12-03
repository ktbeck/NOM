const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_qfqQ6DM6qivuycGjPqZTRP1N'
  : 'pk_test_qfqQ6DM6qivuycGjPqZTRP1N';

module.exports = STRIPE_PUBLISHABLE;