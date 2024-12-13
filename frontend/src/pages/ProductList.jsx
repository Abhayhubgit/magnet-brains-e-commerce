import React from 'react';
import products from './ProductData'; // Path to the mock data file

function ProductList() {
  return (
    <div className='mainproduct'>
     
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            {/* <p>{product.description}</p> */}
            <p className='price' >Price: ${product.price}</p>
            <p className='rating' >Rating: {product.rating} stars</p>
            <button >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
