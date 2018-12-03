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


### ----- Name of Problem -----

**Description:** 

**Location:** 

**Suggested Action:** 




