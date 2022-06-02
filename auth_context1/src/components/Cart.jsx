import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = (props) => {

    const {Addtocart} = useContext(CartContext);

    return (
        <div>
           cart
           <button onClick={() => Addtocart()}>Add to cart</button>
        </div>
    )
}

export default Cart
