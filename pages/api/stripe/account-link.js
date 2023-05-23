// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


/*
const accountLink = await stripe.accountLinks.create({
    account: '{{CONNECTED_ACCOUNT_ID}}',
    refresh_url: 'https://example.com/reauth',
    return_url: 'https://example.com/return',
    type: 'account_onboarding',
  });

*/
  export default async function handler(req, res) {
    const account = req.method
    console.log(account)
    /* 
   const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://example.com/reauth',
      return_url: 'https://example.com/return',
      type: 'account_onboarding',
    })*/

    res.send({
      test: "123"
    });
  };
  