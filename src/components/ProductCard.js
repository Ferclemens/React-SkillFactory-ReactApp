import React from 'react'
import { useState } from "react"

function ProductCard({initial, stock, data}) {
  const {title, price, description, category, image, rating} = data
  const [carrito, setCarrito] = useState(initial)

  const addItemCart = () => {
      if (carrito >= 0 && carrito <= stock){
          setCarrito(carrito + 1)
      }
      console.log(carrito);
  }
  const deleteItemCart = () => {
    if (carrito > 0){
      setCarrito(carrito - 1)
    }
    console.log(carrito);
}

  return (
    <div className='ItemCountContainer'>
        <h3>{title}</h3>
        <img className='img' src={image}/>
        <p>Precio: {price}</p>
        <div className='buttonsContainer'>
          <button className="button" onClick={addItemCart}>Add ITEM!</button>
          <h3>{carrito}</h3>
          <button className="button" onClick={deleteItemCart}>Delete ITEM!</button>
        </div>
    </div>
  )
}

export default ProductCard