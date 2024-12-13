import React from 'react'
import { useState } from 'react'
import products from './ProductData';
import { Routes,Route ,  useNavigate } from 'react-router-dom';

const Home = () => {
    const [totalcart, settotalcart] = useState(0) ;
    const [totalprice, settotalprice] = useState(0) ;
    const [selectedProducts, setSelectedProducts] = useState([]);
    
  
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
    
    <div>
 {/* Navbar page-------------------> */}
 <div className='nav'>
     <div className="nav-left">
        <h1>Shopify</h1>
     </div>
     <div className="nav-ri">
        <h3>Welcome Abhay</h3>
           
        <button onClick={handleClick} >Cart Items - <span>{totalcart} </span></button>
       
       

        </div>
    </div>
    {/* product page-------------------> */}
    <div className='mainproduct'>
     
     <div className="product-list">
       {products.map(product => (
         <div key={product.id} className="product-card">
           <img src={product.imageUrl} alt={product.name} />
           <h3>{product.name}</h3>
           <p className='price' >Price: ${product.price}</p>
           <p className='rating' >Rating: {product.rating} stars</p>
           <button onClick={() => addtocarthandle(product)} >Add to Cart</button>
         </div>
       ))}
     </div>
   </div>

  
   {/* <div>
      <products products={products}  />
      {selectedProducts.length > 0 && (
        <ProductDetails product={selectedProducts[0]} />
      )}
      <button >Checkout</button>
    </div> */}
     {/* <div className='checkoutproduct' >
       {selectedProducts.map(product => (
         <div key={product.id} className="product-card">
           <h3>{product.name}</h3>
           <p className='price' >Price: ${product.price}</p>
           <h3>Quantity : 1</h3>
         
         
         </div>
        
       ))}
       <div className='gap' ></div>
       
     </div>
     <h1 className='totalprice' >Your Total Price is : {totalprice}</h1>
     <button className='checkout'  >Proceed to Checkout</button> */}

     {/* <Checkout array={selectedProducts }  ttprice={totalprice} />
      */}
    </div>
  )
}

export default Home