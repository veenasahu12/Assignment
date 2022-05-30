import React, { useEffect, useState } from "react";
import axios from "axios"
import {Flex , Grid} from '@chakra-ui/react'
import Product from "./Product";
import AddProduct from "./AddProduct";

const Products = () => {

const [data , setData] = useState([])

const fetchproducs = async() => {
  axios({
    method: "get",
    url:"http://localhost:8080/products"
  })
  .then(r => setData(r.data))
}

useEffect(() => {
  fetchproducs();
},[setData])
//  TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex flexDirection="column"
    >
       {/* AddProduct */}
       <AddProduct/>
       
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
      <Grid templateColumns='repeat(3, 1fr)' gap={15} margin="auto" border="1px solid black" padding="3%" box-shadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"} >
        {
        /* List of Products */
        data.map((elem) => {
          return <Product key={elem.id} item={elem}/>
        })
        }
        
        </Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
