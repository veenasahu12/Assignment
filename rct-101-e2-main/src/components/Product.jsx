import React from "react";
import { Text,Image,Tag,Heading,Box,TagLabel,Stack } from "@chakra-ui/react";

const Product = ({item}) => {
  console.log(item)
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image"  src={item.imageSrc}/>
      <Text data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">Rs. {item.price}/unit</Box>
    </Stack>
  );
};

export default Product;
