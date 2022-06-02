import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Wislist = (props) => {

    const {count} = useContext(CartContext)
    return (
        <div>
           wislist: {count} 
        </div>
    )
}

export default Wislist
