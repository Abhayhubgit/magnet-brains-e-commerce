import { useState } from 'react'
import Navbar from './pages/Navbar'
import products from './pages/ProductData';
import Checkout from './pages/Checkout';
import {Navigate , Routes,Route ,  useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './pages/PaymentForm';







function App() {
  const [totalcart, settotalcart] = useState(0) ;
  const [totalprice, settotalprice] = useState(0) ;
  const [selectedProducts, setSelectedProducts] = useState([]);

  const stripePromise = loadStripe('pk_test_51QVU7MHCaBBkNHsXVWm6O9OZHhiV5tqbzLgzNrgrfZmUxo0gSrTzC4U2rs56Vnx5F08t0KoHsXZBPFYxngZy1c2h00263r1CH7');
  

  const navigate = useNavigate();
  const handleClick = () => {
    console.log("nav");
    
    navigate('/Checkout', { state: { array: selectedProducts, constVar: totalprice } });
  };

  const addtocarthandle = (e) => {
    settotalcart(totalcart+1) ;
    settotalprice(totalprice + e.price) ;
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, e]);  
  }
  
  console.log(selectedProducts);
  console.log(totalcart);
  console.log(totalprice);

  
  
  return (
    
    <>
    <Routes>
    <Route  path='/'  element={<Navigate to='/Home'/>} />
    <Route  path='/Home'  element={<Home/>}/>
       <Route  path='/Checkout'  element={<Checkout/>}/>
       <Route  path='/PaymentForm'  element={<PaymentForm/>}/>

       </Routes>
      
   
     
    </>
    
 
  )
}

export default App
