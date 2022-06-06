import React, { createContext,useContext } from "react";
import { useState } from 'react';
import {AuthContext} from './AuthContext'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const {isAuthorised} = useContext(AuthContext);
    const [count, setCounter] = useState(0);

    const Addtocart = () => {
        setCounter(count+1);
     };

    const buy = () => {
      if(isAuthorised){
           console.log("can buy")
      }else{
           console.log("cannot buy without loggin in")
      }
    }
  return <CartContext.Provider value={{count,Addtocart,buy,setCounter}}>
    {children}
    </CartContext.Provider>;
};
