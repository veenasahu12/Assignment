import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Product = (props) => {

    const [product , setProduct] = useState({})
    const { id } = useParams();
    console.log(id)


    useEffect(() => {
    if(id){
        fetch(`http://localhost:8080/products/${id}`)
        .then((r) => r.json())
        .then((d) => setProduct(d));
    }
    },[id])
    return (
        <div>
          product ID: {id}
          <div>{product.name}</div>
        </div>
    )
}

export default Product
