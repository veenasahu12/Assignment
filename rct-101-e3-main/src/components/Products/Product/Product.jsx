import React,{ useContext} from "react";
import { AuthContext } from "../../../context/AuthContext";
import { CartContext } from "../../../context/CartContext";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

const Product = ({item}) => {
console.log(item);
const {Addtocart} = useContext(CartContext)
const [ state ,dispatch] = useContext(AuthContext);
// const [data , setData] = useState([]);
  // Note: this id should come from api
  // const product = { id: 1 };
  
  // useEffect(() => {
  //   axios({
  //     url:"http://localhost:8080/cartItems",
  //     method: "GET",
  //   })
  //   .then((r) => {
  //      console.log(r)
  //      setData(r.data);
  //   })
  // },[setData])

  // console.log(data)

  // const filterdata = data.filter(e => e.productId === item.id)
  //   console.log(filterdata,"filterdata")
  
  return (

    <div data-cy={`product-${item.id}`}>
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={() => dispatch({type: "inc"})}>+</button>
        <span data-cy="product-count">
          {state.counter}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={() => dispatch({type: "dec"})}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={() => Addtocart()}>Remove From Cart</button>
      </div>
    </div>
  )
};

export default Product;
