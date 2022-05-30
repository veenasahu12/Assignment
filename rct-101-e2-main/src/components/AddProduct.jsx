import React, { useState } from "react";
import axios from "axios";
// import styled from "styled-components";
import { Button,Modal,ModalBody,Input,Select,RadioGroup,Radio,useDisclosure,ModalOverlay,ModalContent } from "@chakra-ui/react";


const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [form, setForm] = useState({
    title: "",
    category: "",
    gender: "",
    imageSrc: "",
    price: "",
  })


  const handleChange = (e) => {
    const {id,value} = e.target;

    setForm({
      ...form,
      [id]:value,
    })
  }
  const handlesubmit = (e) => {
    console.log(e);

    axios({
      method: "POST",
      url: "http://localhost:8080/products",
      data : form
    })
    .then(r => console.log(r));
  }
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
    {/* <h1>form</h1> */}
    <form onSubmit={handlesubmit}>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} margin="auto" colorScheme='teal' size='sm'>Create New Product</Button><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Modal isOpen={isOpen} onClose={onClose}>
      <br/>
      <br/>
      <br/>
      <br/>
      <ModalOverlay />
      <ModalContent>
        <ModalBody pb={6}>
          <label>TITLE</label><br/>
          <Input data-cy="add-product-title" onChange={handleChange} placeholder="Title"/>
          <Select data-cy="add-product-category" onChange={handleChange}>
            <option data-cy="add-product-category-shirt" value="Shirt">Shirt</option>
            <option data-cy="add-product-category-pant" value="Pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" onChange={handleChange}>
            <Radio data-cy="add-product-gender-male" type="radio">Male</Radio>
            <Radio data-cy="add-product-gender-female" type="radio">Female</Radio>
            <Radio data-cy="add-product-gender-unisex" type="radio">Unisex</Radio>
          </RadioGroup>
          <label>Price</label>
          <Input data-cy="add-product-price" onChange={handleChange} type="Number" placeholder="Rs."/>
          <Button data-cy="add-product-submit-button" type="submit">Create</Button>
        </ModalBody>
        </ModalContent>
      </Modal>
      </form>
    </>
  );
};

export default AddProduct;
