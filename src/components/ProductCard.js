import React from 'react'
import { useState } from "react"
import Button from './Button'
import Modal from './Modal'

function ProductCard({initial, stock, data}) {
  const {title, price, description, category, image, rating} = data
  const [carrito, setCarrito] = useState(initial)
  const [showModal, setShowModal] = useState(false)
  
  const addItemCart = () => {
      if (carrito >= 0 && carrito <= stock){
          setCarrito(carrito + 1)
      }
      //console.log(carrito);
  }
  const deleteItemCart = () => {
    if (carrito > 0){
      setCarrito(carrito - 1)
    }
    //console.log(carrito);
}
  const showDescription = () => {
    setShowModal(!showModal)
    console.log(showModal);
}
  return (
    <div className='ItemCountContainer'>
        <Modal estado={showModal} cambiarEstado={setShowModal} data={data}/>
        <h3>{title}</h3>
        <div className='detailsContainer'>
          <img className='img' src={image}/>
          <p>Price: $ {price}</p>
          <Button name={'Details'} accion={showDescription}/>
          <div className='buttonsContainer'>
            <Button name={'Add'} accion={addItemCart}/>
            <h3>{carrito}</h3>
            <Button name={'Delete'} accion={deleteItemCart}/>
          </div>
        </div>
    </div>
  )
}

export default ProductCard