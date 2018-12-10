import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import  firebase  from 'firebase/app';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD';
var db = firebase.database();
const fromDollarToCent = amount => amount * 100;

const successPayment = (seller, numMeal)  => {
  alert('Payment Successful');
  var sell = db.ref("users").orderByChild("email").equalTo(seller);
  sell.on("child_added",(snapshot)=> 
        snapshot.ref.update({numMeals: numMeal - 1 })
    );
  //window.location.reload();
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, seller, numMeal) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then(successPayment(seller, numMeal))
    .catch(errorPayment);

const Checkout = ({ name, description, amount, seller, numMeal }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description, seller, numMeal)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;