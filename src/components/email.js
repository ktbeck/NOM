const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
	user: gmailEmail,
	pass: gmailPassword,
  },
});

// Your company name to include in the emails
const NOM = 'Cloud Storage for Firebase quickstart';

// [START userBoughtMeal]
/**
 * Send a "Bought a meal" email notification to users
 * whose meal(s) have been purchased
 */
// [START onBuyTrigger]
exports.sendBoughtEmail = functions.auth.user().onBuy((user) => {
// [END onBuyTrigger]
  // [START eventAttributes]
  const email = user.email; // The email of the user.
  const displayName = user.displayName; // The display name of the user.
  // [END eventAttributes]

  return sendBoughtEmail(email, displayName);
});
// [END userBoughtMeal]


  //Sends a "userBoughtMeal" emails
  function sendBoughtEmail(email, displayName) {
	const mailOptions= {
		from: `${NOM} <noreply@firebase.com>`,
		to: email,
	};

	//Somebody has bought a pass from
	mailOptions.subject = `NOM - Someone purchased a meal from you!`;
	mailOptions.text = `Hey ${displayName || ''}!,
	We wanted to notify you that someone has purchased a meal from you.
	They should contact you shortly.`;
	return mailTransport.sendMail(mailOptions).then(() => {
	  return console.log('Purchase notification sent to:', email);
  };
}
