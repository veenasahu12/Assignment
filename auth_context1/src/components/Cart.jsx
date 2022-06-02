import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../context/CartContext'

const Cart = (props) => {

    const {count,setCounter} = useContext(CartContext);
    return (
        <div>
           cart
           <button onClick={() => setCounter(count+1)}>Addtocart</button>
        </div>
    )
}

export default Cart
