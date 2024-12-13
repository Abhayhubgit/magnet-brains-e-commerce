import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Navbar = () => {

    
     const [totalcart, settotalcart] = useState(0);

      
  return (
    <div className='nav'>
     <div className="nav-left">
        <h1>Shopify</h1>
     </div>
     <div className="nav-ri">
        <h3>Welcome Abhay</h3>
           
        <button onClick={handleClick} >Cart Items - <span>{totalcart} </span></button>
       
       

        </div>
    </div>
  )
}

export default Navbar