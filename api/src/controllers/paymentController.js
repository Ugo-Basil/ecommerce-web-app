const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


async function payment(req, res) {
    const total = req.body.amount;
    console.log('Payment Request Received!!! for this amount', total);

    const payment = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: 'usd',
    });

    res.status(201).send({
        clientSecret: payment.client_secret,
    });
}

module.exports = {
    payment,
};