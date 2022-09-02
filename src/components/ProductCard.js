import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import Button from './Button'
import Cart from './Cart'
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
    if (carrito > 1){
      setCarrito(carrito - 1)
    }
    //console.log(carrito);
}
  const showDescription = () => {
    setShowModal(!showModal)
    console.log(showModal);
}
  const addProduct = () => {
    
  }

  return (
    <div className='ItemCountContainer'>
        <Modal estado={showModal} cambiarEstado={setShowModal} data={data}/>
        <h3>{title}</h3>
        <div className='detailsContainer'>
          <img className='cardImg' src={image}/>
          <div className='cardPriceDetails'>
            <h5>Price: $ {price}</h5>
            <Button name={'Details'} accion={showDescription} estilo={{padding:0 + 'px' + 20 + 'px'}}/>
          </div>
          <div>
            <div className='buttonsContainer'>
              <Button name={'+'} accion={addItemCart}/>
              <h3>{carrito}</h3>
              <Button name={'-'} accion={deleteItemCart}/>
            </div>
            <Button name={'Add'} accion={addProduct}/>
          </div>
        </div>
        <Link to='cart'>Ir al Carrito</Link>
    </div>
  )
}

export default ProductCard