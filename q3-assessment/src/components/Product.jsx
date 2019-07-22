import React from 'react';

function Product({ product, toggleCart }) {
  return (
    <div className="product">
      <h3>Camera Name: {product.name}</h3>
      <img className="productImg" src={product.picture} alt="Sorry no pic 4 u"/>
      <h5>Price: ${product.price}</h5>
      <h7>Rating: {product.rating}</h7>
      {product.onSale && <h5>On Sale!</h5>}
      <button onClick={() => toggleCart(product.id)} >{product.inCart ? 'REMOVE FROM CART' : 'ADD TO CART'}</button>
    </div>
  )
}

export default Product