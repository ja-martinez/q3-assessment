import React from 'react';
import ProductDisplay from './ProductDisplay'
import Cart from './Cart'

class MainContent extends React.Component {

  state = {
    products: [],
    filterBy: ''
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:8000/cameras')
    const products = await res.json()
    this.setState({
      products
    })
  }

  changeFilter = (newFilter) => {
    this.setState({
      filterBy: newFilter
    })
  }

  toggleCart = async (id) => {
    const currentlyInCart = this.state.products.find(product => product.id === id).inCart
    const res = await fetch(`http://localhost:8000/cameras/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        inCart: !currentlyInCart
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      this.setState(prevState => ({
        ...prevState,
        products: prevState.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              inCart: !product.inCart
            }
          } else {
            return product
          }
        })
      }))
    }
  }

  render() {
    const cartItems = this.state.products.filter(product => product.inCart);
    const filteredProducts = this.state.products.filter(product => product.name.toUpperCase().includes(this.state.filterBy.toUpperCase()))
    
    return (
      <main className="container">
        <ProductDisplay 
        products={filteredProducts} 
        changeFilter={this.changeFilter} 
        filterBy={this.state.filterBy} 
        toggleCart={this.toggleCart}  
        />
        <Cart cartItems={cartItems} toggleCart={this.toggleCart} />
      </main>
    )
  }
}

export default MainContent;