# ecommClone

This is an Amazon Clone written in React and deployed using Firebase from Google.  

https://ecomm-2c63c.web.app/

To sign in, click on "Sign In" in the header.  
 - For new users, fill out the email and password inputs and click "Create an Account"
 - For existing users, fill out the email and password inputs and click "Sign In"

All new user objects are created and stored through Firebase.  Authentication for existing users are also completed through Firebase.

Functionality for the shopping basket (stylistic decision to use a basket instead of a cart) is to add an item from the store to your basket.

Of note, the banner in the main page is only a picture and not clickable.  Icons were sourced from material-ui.  Pictures of products were sourced from Amazon and MSC Advertising's Facebook Store.  I do not own these pictures and if they need to be removed, please inform me of which picture and it will be removed within 48 hours. 

Features still to come as of 2/23/2021:
- Checkout with Stripe API
- Order History

** Personal Note ** 
By no means was this an easy build.  

This is a big step for me.  The techniques used in this build were different from what I learned in a previous coding boot camp.  In this build, I utilized a reducer.js and a StateProvider.js to create a data layer to access properties.  Additionally, I used 'react-router-dom' instead of '@reach/router' for navigation.  

I also did not put all components within an additional folder but left them all throughout the src folder.  I'm not exactly sure if that is my favorite method because of my organization views, but this should be easier to access because of the limited amounts of folders the system must access to locate the correct file. 

I have previously deployed through AWS and used storage through MongoDB and wrote my own Authentication codes.  Using Firebase in this way, eliminated the need for all of those and reduced the amount of bugs.  I hope you enjoy viewing the site!  
