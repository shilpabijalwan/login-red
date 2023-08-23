import React from "react";

import { Button, Grid, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  image,
  brand,
  title,
  gender,
  price,
  discount,
  id,
}) => {
  const handleCart = (e) => {
    console.log(e);
  };
  return (
    <Box
      // border={"1px solid green"}
      //   textAlign={"center"}
      //   justifyItems={"center"}
      boxShadow="dark-lg"
      p="7"
      rounded="md"
      bg="whiteAlpha.600">
      <Link to={`/products/${id}`}>
        <Image src={image} w={"100%"} h={170} />
        <Text fontSize={20}>price : {price}</Text>
        <Text fontSize={20}>brand : {brand}</Text>
        <Text fontSize={17}>title : {title}</Text>
        <Text fontSize={17}>category : {gender}</Text>
        <Text fontSize={17}>discount-price : {discount}%</Text>
      </Link>
      <br />
      <Button onClick={() => handleCart(id)} ml={7} p={4}>
        Add to Cart
      </Button>
      <br /> <br />
      <Link to={`/edit/${id}`}>
        <Button ml={7} p={4}>
          Edit
        </Button>
      </Link>
    </Box>
  );
};
