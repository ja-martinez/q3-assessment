import React from 'react'
import Product from './Product'

function ProductList({ products, toggleCart }) {
  return (
    <div className="productList">
      {products.map(product => <Product key={product.id} product={product} toggleCart={toggleCart} />)}
    </div>
  )
}

export default ProductList