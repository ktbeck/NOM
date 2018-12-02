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



### ----- Name of Problem -----

**Description:** 

**Location:** 

**Suggested Action:** 



