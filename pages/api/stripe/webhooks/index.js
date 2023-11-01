const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const webhookSecret = "whsec_d2af0a70af2c6553d47f910e16ebe77789952dd016a7740e5ba4ac65af409dc7"


const webhookHandler = async (req, res) => {
    if (req.method === 'POST') {
        const buf = await buffer(req)
        const sig = req.headers['stripe-signature']

        let event;

        try {
            event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
        } catch (err) {
            // On error, log and return the error message
            console.log(`❌ Error message: ${err.message}`)
            res.status(400).send(`Webhook Error: ${err.message}`)
            return
        }

        // Successfully constructed event
        console.log('✅ Success:', event.id)
    }
}