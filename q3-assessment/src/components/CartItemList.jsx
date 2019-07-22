import React from 'react'
import CartItem from './CartItem'

function CartItemList({ cartItems, toggleCart }) {
  return (
    <div className="cartItemList">
      <ul className="list-group">
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} toggleCart={toggleCart} />)}
      </ul>
    </div>
  )
}

export default CartItemList