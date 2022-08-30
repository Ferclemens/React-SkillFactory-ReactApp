import React from 'react'
import CartWidget from './CartWidget'

function NavBar({nameEcommerce}) {
  return (
    <div className='navBarContainer'>
        <h1>{nameEcommerce}</h1>
        <CartWidget />
    </div>
  )
}

export default NavBar