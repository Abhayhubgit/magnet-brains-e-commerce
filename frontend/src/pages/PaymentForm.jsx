// PaymentForm.js
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return; // Stripe.js hasn't loaded yet.
        }

        setLoading(true);
        setError(null);
        
        

        // Step 1: Create PaymentIntent on the backend
        try {
            const { data: { clientSecret } } = await axios.post('http://localhost:5173/create-payment-intent', {
                amount: 5000 // The payment amount (in cents, e.g., $50.00
            });

            // Step 2: Confirm the payment with the client secret
            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                }
            });

            if (stripeError) {
                setError(stripeError.message);
                setLoading(false);
            } else if (paymentIntent.status === 'succeeded') {
                alert('Payment successful!');
                setLoading(false);
            }
        } catch (error) {
            setError('An error occurred while processing your payment.');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='paymentform'>
            <h2  className='paymenth2'>Complete Your Payment</h2>
            <CardElement />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit" disabled={loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            </div>
        </form>
    );
};

export default PaymentForm;
