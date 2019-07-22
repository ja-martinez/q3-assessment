import React from 'react'
import ChangeDisplay from './ChangeDisplay'
import ProductList from './ProductList'

function ProductDisplay({ products, changeFilter, filterBy, toggleCart }) {
  return (
    <div className="productDisplay">
      <ChangeDisplay changeFilter={changeFilter} filterBy={filterBy} />
      <ProductList products={products} toggleCart={toggleCart} />
    </div>
  )
}

export default ProductDisplay