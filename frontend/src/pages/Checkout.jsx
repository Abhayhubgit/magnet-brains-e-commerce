import React from 'react'
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe('pk_test_51QVU7MHCaBBkNHsXVWm6O9OZHhiV5tqbzLgzNrgrfZmUxo0gSrTzC4U2rs56Vnx5F08t0KoHsXZBPFYxngZy1c2h00263r1CH7');

const Checkout = (props) => {
    
    const location = useLocation();

    console.log(location.state);
    

    
  return (


   

    
    <div> 
     
         <div className='checkoutproduct' >
    {location.state.array.map(product => (
      <div key={product.id} className="product-card">
        <h3>{product.name}</h3>
        <p className='price' >Price: ${product.price}</p>
        <h3>Quantity : 1</h3>
      
      
      </div>
     
    ))}
    <div className='gap' ></div>
    
  </div>
  <h1 className='totalprice' >Your Total Price is {location.state.constVar}: </h1>
  <Elements stripe={stripePromise}>
            <div>
               
                <PaymentForm />
            </div>
        </Elements>
  </div>
  )
}

export default Checkout