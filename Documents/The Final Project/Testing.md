
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

**EC: Signup with empty email**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Sign up with invalid email form**
- Test Cases: {"asdfadsf", "", "asdfsa@asdf}
- Expected Output: form gives badly formatted email error

**EC: Sign up with a password with >= 6  characters**
- Test Cases: {"asdfadsf", "", "asdfsa@asdf}
- Expected Output: form allows submission, given all other fields are correct

**EC: Signup with empty password**
- Test Cases: {""}
- Expected Output: disable submit button

**EC: Sign up with a password with < 6 characters**
- Test Cases: {"asdfadsf", "asdfsa@asdf}
- Expected Output: form gives password too short error

**EC: Sign in with taken email**
- Test Cases: {"ktbeck@ucsc.com", "erong@ucsc.com"}
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

**EC: Signup with empty password**
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


### ----- Eric Rong -----

**EC: Stripe Checkout with valid Stripe test info**
- Test Cases: {"erong@ucsc.edu", 4242 4242 4242 4242, 12/21, 123}
- Expected Output: Stripe payment successful message

**EC: Stripe Checkout with invalid Stripe test info**
- Test Cases: {"erong", 0000, 12/12, ""}
- Expected Output: Stripe refuses to submit payment

**EC: Update account with anything for About Me**
- Test Cases: {"", "Here is a little about me"}
- Expected Output: account info updated

**EC: Update account with anything for Contact Ingo**
- Test Cases: {"", "0000000000"}
- Expected Output: account info updated

**EC: Update account with anything for Paypal Email**
- Test Cases: {"", "erong@ucsc.edu"}
- Expected Output: account info updated

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
