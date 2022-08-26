import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({nameEcommerce}) {

  return (
    <div className='itemListContainer'>
        <h3>{nameEcommerce}</h3>
        <ItemCount stock={15} initial={1} />
    </div>
  )
}

export default ItemListContainer