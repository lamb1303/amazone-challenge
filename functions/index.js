const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")('sk_test_51Hlk5ZF5YOjev7Mq4fYYBsUHaUYTny7E8Ajo0WPzJmiv629c8c2kroyJ9hEkF1SqbZBeadfFrbVqgQtBBrNy33Iy0018rZHBBa');
// API

// App config
const app = express();

// Midelwares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes
app.get('/', (request, response) => response.status(200).send('Hello'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request received boom!!!', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "mxn"
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen commmand
exports.api = functions.https.onRequest(app);

//Example end point:  firebase emulators:start
//http://localhost:5001/challenge-aa8d6/us-central1/api






