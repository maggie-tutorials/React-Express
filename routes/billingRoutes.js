const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // Adding 5 credits to the user model that just paid
    // passport makes the current user available as req.user
    req.user.credits += 5;
    const user = await req.user.save(); //whenever we save a model is an async request

    res.send(user);
  });
};
