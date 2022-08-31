import React from 'react'

function Button({name, accion}) {
  return (
    <button className='button' onClick={accion}>{name}</button>
  )
}

export default Button