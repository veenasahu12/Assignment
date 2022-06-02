import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Cart from './Cart';

const Product = (props) => {

    const {isAuthorised} = useContext(AuthContext);
    return (
        <div>
           product: {isAuthorised ? "LoggedIN" : "LoggedOUT"} 
           <Cart/>
        </div>
    )
}

export default Product
