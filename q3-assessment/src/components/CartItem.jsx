import React from 'react'

function CartItem({ cartItem, toggleCart }) {
  return (
    <li className="list-group-item">
      <h4>{cartItem.name}</h4>
      <button onClick={() => toggleCart(cartItem.id)} >delete</button>
    </li>
  )
}

export default CartItem