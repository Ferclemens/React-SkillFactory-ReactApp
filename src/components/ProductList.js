import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function ProductList() {
  const [productsList, setProductsList] = useState([])  

  const GetHttp = async () => {
    const response = await fetch('https://fakestoreapi.com/products/')
    const data = await response.json() 
    setProductsList(data)
  }

  useEffect( () => {
    GetHttp()
  },[])
  
  console.log(productsList);

  return (
    <div className='itemListContainer'>
      {productsList !== [] ? <h2>Products List</h2> : <h2>Bienvenidos!</h2>}
      {productsList.map((product) => { 
      return (
        <ProductCard stock={15} initial={1} data={product} key={product.id} />)
      })}
    </div>
  )
}

export default ProductList