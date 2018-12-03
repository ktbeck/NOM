## ----- WORKING PROTOTYPE KNOWN PROBLEMS REPORT -----
**Product Name:** NOM Dining Hall Meal Exchange  
**Team Name:** Nom Slugs  
**Date:** December 2, 2018  

Note: This document contains all known errors that will be shipped with the final product.

### ----- Log Out Exception -----

**Description:** On logout, an exception has appeared that says the element is null. We have not been able to reproduce the problem consistently. 

**Location:** The source of the issue is the handleClick function in ListPass.js

**Suggested Action:** Keep a close eye on actions taken before logging out / Add a null check to the function.



### ----- Character Limit -----

**Description:** The inputs do not have a character limit or security checks. Although not a common use case, there is a possibility that users can input invalid things that will break the website / database. This may cause problems in the future.

**Location:** All inputs on the website.

**Suggested Action:** Add security and length checks to inputs.


### ----- Pay with card buttons overlap update passes popup -----

**Description:** If the screen size is changed, the stripe pay with card buttons overlap the update passes popup and cover parts of it.

**Location:** Home Screen.

**Suggested Action:** Find out how to make the popup the "top" element.


### ----- Firebase Slow Load -----

**Description:** When firebase is loading, on the home screen the user will sometime see "no meals available" for a short time while firebase loads. Also if the user goes to the admin page without admin privileges, they briefly see the admin page before being redirected.

**Location:** Home page and Admin page

**Suggested Action:** Store firebase information so we don't have to load it as users go to the page.


### ----- Localhost Node Already Running -----

**Description:** If node servers are already running and we restart the website, new node servers can't be started. Causes payments backend and webhooks to fail as it uses node server. Also gives user runtime errors.

**Location:** Startup of website/Payment/Webhooks

**Suggested Action:** Make sure all node servers are killed before starting the web app.


### ----- Payments in Firebase are test payments -----

**Description:** Currently, we haven't updated the keys to make stripe payments automatically upload to firebase. All the old information is test payments. 

**Location:** Admin page/Firebase database 

**Suggested Action:** Change keys and make changes to formatting of payments on firebase for display.


### ----- Meals not subtracted on payment -----

**Description:** Meals aren't subtracted from database on successful or failed purchase of a meal. 

**Location:** Home page

**Suggested Action:** Try different approach for subtracting users meals from database.


### ----- Cannot Add Reviews -----

**Description:** Cannot add reviews to other users page right now. Ran into bugs with accessing other users information in database.

**Location:** Account and viewprofile

**Suggested Action:** Find out how to edit other user's profile without changing anything else.



### ----- Descriptions break in the middle of words -----

**Description:**  Descriptions, paypal email, and contact info in the About Me sometimes break in the middle of words.

**Location:** Account page

**Suggested Action:** Use a different styling for the descriptions such that text wraps around but does not break.


### ----- Passes not listed on account page  -----

**Description:**  Since removing one self's own passes from Home page (because users cannot buy meals from themselves) there is no other place except in "Update Pass" where a user can see how many passes they have listed. 

**Location:** Account page

**Suggested Action:**  List the amount of passes a user has and the price on the account page.


### ----- Paypal email does not check format  -----

**Description:**  Paypal email input does not check input for any formatting.

**Location:** Account page

**Suggested Action:**  Place restrictions on the format that users can input into the paypal email.


### ----- If user doesn't accept location tracking distance will be incorrect  -----

**Description:**  If user doesn't agree to give their location, distances from dining halls will be incorrect.

**Location:** Whole site. 

**Suggested Action:** Add a check for if the user doesn't give their location.


### ----- Meal price listing  -----

**Description:**  When updating passes in "Update Passes", the meal price is not restricted to two decimal places for cents.

**Location:** ListPass

**Suggested Action:** Add a restriction so that cents are restricted to the proper format.


