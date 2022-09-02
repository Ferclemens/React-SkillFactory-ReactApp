import React from 'react'

const Modal = ({estado, cambiarEstado, data}) => {
    const {title, price, description, category, image, rating} = data
    
    const closeModal = () => {
        cambiarEstado(false)
    }
    
    return (
        <>
            {estado && 
            <div className='modalContainer'>
                    <div className='modalDetails'>
                        <button className='modalClose' onClick={closeModal}><img className='modalCloseImg' src='https://cdn-icons-png.flaticon.com/512/753/753345.png'/></button>
                        <img src={image} className='modalImg'/>
                        <div className='modalTextContainer'>
                            <h3>{title}</h3>
                            <h4 className='modalText'>{description}</h4>
                        </div>
                    </div>
            </div>
            }
        </>
    )
}
export default Modal