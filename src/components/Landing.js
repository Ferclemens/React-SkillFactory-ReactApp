import React, { useState } from 'react'
import Button from './Button'
import NavBar from './NavBar'
import ProductList from './ProductList'

function Landing() {
    const [list, setList] = useState(false)
    const showProducts = () => {
        setList(!list)
    }
    return (
        <div className="landing">
            <NavBar nameEcommerce={'Carrefourcito'}/>
            { list ? <ProductList/> : <Button name={'Show Products'} accion={showProducts}/>}
        </div>
    )
}

export default Landing