const express = require('express');
const app = express();
const Stripe = require('stripe');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

app.use(express.json());
// const STRIPE_SECRET_KEY =sk_test_51QVU7MHCaBBkNHsXkDgMKNUk5xD5ElvN3hdz2oEM0fR0XuBXdDOaEvfhrZV615QEChKK7D8UZ2NP6Y2nLQYsY40300glZ6zpKz
// STRIPE_PUBLISHABLE_KEY =pk_test_51QVU7MHCaBBkNHsXVWm6O9OZHhiV5tqbzLgzNrgrfZmUxo0gSrTzC4U2rs56Vnx5F08t0KoHsXZBPFYxngZy1c2h00263r1CH7

const port = process.env.PORT || 5173;
// Filename - index.js


const bodyparser = require("body-parser");
const path = require("path");

const Publishable_Key = "pk_test_51QVU7MHCaBBkNHsXVWm6O9OZHhiV5tqbzLgzNrgrfZmUxo0gSrTzC4U2rs56Vnx5F08t0KoHsXZBPFYxngZy1c2h00263r1CH7";
const Secret_Key = "sk_test_51QVU7MHCaBBkNHsXkDgMKNUk5xD5ElvN3hdz2oEM0fR0XuBXdDOaEvfhrZV615QEChKK7D8UZ2NP6Y2nLQYsY40300glZ6zpKz";

const stripe = require("stripe")(Secret_Key);



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("Home", {
        key: Publishable_Key
    });
});

app.post("http://localhost:5173/payment", function (req, res) {
   
    stripe.customers
        .create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: "Gourav Hammad",
            address: {
                line1: "TC 9/4 Old MES colony",
                postal_code: "452331",
                city: "Indore",
                state: "Madhya Pradesh",
                country: "India"
            }
        })
        .then((customer) => {
            return stripe.charges.create({
                amount: 2500, // Charging Rs 25
                description: "Web Development Product",
                currency: "INR",
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success"); // If no error occurs
        })
        .catch((err) => {
            res.send(err); // If some error occurs
        });
});


   
 
    
app.listen(port, () => {
 console.log(`Server is listening on port ${port}`);
});