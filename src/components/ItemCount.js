import React from 'react'
import { useState } from "react"

function ItemCount({initial, stock}) {
    
    const [carrito, setCarrito] = useState(initial)
    const addItemCart = () => {
        if (carrito >= 0 && carrito <= (stock - 1)){
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
        <button className="button" onClick={addItemCart}>Add ITEM!</button>
        <h3>{carrito}</h3>
        <button className="button" onClick={deleteItemCart}>Delete ITEM!</button>
    </div>
  )
}

export default ItemCount