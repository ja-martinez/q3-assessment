import React from 'react'
import CartItemList from './CartItemList'

function Cart({ cartItems, toggleCart }) {
  const subtotal = cartItems.reduce((acc, currentVal) => acc + currentVal.price, 0)
  const tax = (subtotal * 0.086);
  const total = subtotal + tax;

  return (
    <div className="cart card bg-info">
      <h4>Your Cart</h4>
      <CartItemList cartItems={cartItems} toggleCart={toggleCart} />
      <h5>Subtotal: ${subtotal}</h5>
      <h5>Tax: ${tax.toFixed(2)}</h5>
      <h4 id="cartTotal">Total: ${total.toFixed(2)}</h4>
      <button>CHECKOUT</button>
    </div>
  )
}

export default Cart;