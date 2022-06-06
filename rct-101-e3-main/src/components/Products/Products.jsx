import React from "react";
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import Product from "./Product/Product"

const Products = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    axios({
      url:"http://localhost:8080/products",
      method: "GET",
    })
    .then((r) => {
      console.log(r)
      setProducts(r.data)
    })
    .catch((err) => {
      console.log(err);
    })
  },[setProducts])
  return <div style={{border:"1px solid black"}}>
    {products?.map((item) => (
       <Product key={item.id} item={item}/>
    ))}
    </div>;
};

export default Products;
