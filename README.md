
# Simple Shopify App Installer
This nifty lil guy lets you create custom Shopify apps and install them without jumping through hoops.

Useful to kickstart a quick and dirty app proxy, for example.

You don't have to fork this repo; You can just... use it.

## How to install a custom Shopify App

- First, head to your partner dashboard -> apps -> Create app -> Custom app
- Set the `App URL` to `https://shopify.workwithpact.com/`.
- Set the `Redirection URLs` to `https://shopify.workwithpact.com/`
- Click "Create app"
![image](https://user-images.githubusercontent.com/279784/128394653-96c047ac-3198-45f2-8edb-628c5313d6f7.png)

Once created:
- Generate a link to a merchant's store; 
- Click on it; 
- Fill in the form with your app's API key and desired scopes. You can leave scopes as is, and leave the callback URL as is, too.
- Hit submit.
- And there you go!

