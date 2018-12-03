
## ----- UNIT TESTS -----
**Product Name:** NOM Dining Hall Meal Exchange  
**Team Name:** Nom Slugs  
**Date:** December 2, 2018  

Note: This document contains details provided by each team member about the module and the functional testing they have done. 

### ----- Kyler Beck -----

**EC: Sign up with any name**
- Test Cases: {"Kyler", "r2d2"}
- Expected Output: form allows submission, given all other fields are correct

**EC: Sign up with an empty name**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Sign up with valid, unused email form**
- Test Cases: {"test@test.com", "another@asdf.com"}
- Expected Output: form allows submission, given all other fields are correct

**EC: Sign up with taken email**
- Test Cases: {"test@test.com", "ktbeck@ucsc.edu"}
- Expected Output: form gives email address is already used error

**EC: Sign up with empty email**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Sign up with invalid email form**
- Test Cases: {"asdfadsf", "", "asdfsa@asdf}
- Expected Output: form gives badly formatted email error

**EC: Sign up with a password with >= 6  characters**
- Test Cases: {"asdfadsf", "", "asdfsa@asdf}
- Expected Output: form allows submission, given all other fields are correct

**EC: Sign up with empty password**
- Test Cases: {""}
- Expected Output: disable submit button

### ----- Eric Rong -----

**EC: Sign up with a password with < 6 characters**
- Test Cases: {"asdfadsf", "asdfsa@asdf}
- Expected Output: form gives password too short error

**EC: Sign in with taken email**
- Test Cases: {"erong@ucsc.com", "schan@ucsc.edu"}
- Expected Output: form allows submission, given password correct

**EC: Sign in with empty email**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Sign In with valid, untaken email form**
- Test Cases: {"random@alsdjf.com"}
- Expected Output: form gives no account error

**EC: Sign In with invalid email form**
- Test Cases: {"sldkfj"}
- Expected Output: form gives badly formated email error

**EC: Sign In with valid password**
- Test Cases: {"qwerty"}
- Expected Output: form allows submission, given correct email

**EC: Sign in with empty password**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Sign In with wrong password**
- Test Cases: {"not password"}
- Expected Output: form gives invalid password error

**EC: Password forget with taken email**
- Test Cases: {"ktbeck@ucsc.com", "erong@ucsc.com"}
- Expected Output: form submits, password reset email sent

**EC: Password forget with empty email**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Password forget with valid, untaken email form**
- Test Cases: {"random@alsdjf.com"}
- Expected Output: form gives no account error

### ----- Steve Chan -----

**EC: Stripe Checkout with valid Stripe test info**
- Test Cases: {"erong@ucsc.edu", 4242 4242 4242 4242, 12/21, 123}
- Expected Output: Stripe payment successful message

**EC: Stripe Checkout with invalid Stripe test info**
- Test Cases: {"erong", 0000, 12/12, ""}
- Expected Output: Stripe refuses to submit payment

**EC: Update About Me with anything**
- Test Cases: {"", "Here is a little about me"}
- Expected Output: account info updated

**EC: Update Contact Info with anything**
- Test Cases: {"", "0000000000"}
- Expected Output: account info updated

**EC: Update Paypal Email with valid email**
- Test Cases: {"", "erong@ucsc.edu"}
- Expected Output: account info updated

**EC: Update Paypal Email with invalid email form**
- Test Cases: {"sldkfj"}
- Expected Output: form should give badly formated email error
- Note: added to error log

**EC: Stripe webhook sent as type Charge**
- Test Cases: {charge.captured}
- Expected Output: recieve 200 OK status, displayed on admin page under charge

**EC: Stripe webhook sent as type anything but Charge**
- Test Cases: {account.external_account.created}
- Expected Output: recieve 200 OK status, displayed on admin page under other

### ----- Nicolle Ayon Campos -----

**EC: Password reset with a matching password with >= 6  characters**
- Test Cases: {"qwerty", "qwerty"}
- Expected Output: form allows submission, given all other fields are correct

**EC: Password reset with unmatching password**
- Test Cases: {"asdf", "fff"}
- Expected Output: disable submit button

**EC: Password reset with empty password**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Password reset with a password with < 6 characters**
- Test Cases: {"asdfadsf", "asdfsa@asdf}
- Expected Output: form gives password too short error

**EC: Password reset outside of sensitive time range**
- Test Cases: {"qwerty", "qwerty"}
- Expected Output: field gives too late error

**EC: Access /admin as admin**
- Test Cases: {role = admin}
- Expected Output: display admin page

**EC: Access /admin as non admin**
- Test Cases: {role != admin}
- Expected Output: do not display admin page, redirect back
- Actual Output: admin page displayed for a second
- Note: added to error log

### ----- Megan Wu -----

**EC: Update meal listing with non negative integer**
- Test Cases: {1, 40}
- Expected Output: form allows submission, given price is correct

**EC: Update meal listing without non negative integer**
- Test Cases: {-1, asdf}
- Expected Output: form shows error, does not allow submission

**EC: Update meal price with valid, positive dollar amount**
- Test Cases: {1, 40.32}
- Expected Output: form allows submission, given quantity

**EC: Update meal price with float with more than 2 decimals**
- Test Cases: {1, 40.32}
- Expected Output: form shows error, does not allow submission
- Actual Output: form allows submission, given quantity
- Note: added to error log

**EC: Update meal price with invalid dollar amount**
- Test Cases: {-1, asdf}
- Expected Output: form shows error, does not allow submission

**EC: Allow google position and set preferred dining hall**
- Test Cases: {Click Allow}
- Expected Output: distances outputted correctly

**EC: Allow google position and set preferred dining hall**
- Test Cases: {Click Block }
- Expected Output: distances disabled
- Actual Output: distances calculated from 0,0
- Note: added to error log










