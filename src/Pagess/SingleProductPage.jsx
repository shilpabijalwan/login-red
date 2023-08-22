import {
  Image,
  Text,
  Box,
  Button,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

import { useParams, Link, useLocation } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();

  //   console.log(id);

  const [data, setData] = useState({});
  const fetchdata = () => {
    axios.get(`http://localhost:8080/posts/${id}`).then((data) => {
      // return data.data;
      setData(data.data);
      //   console.log(data)
    });
  };
  // console.log(data);
  useEffect(() => {
    fetchdata();
  }, []);
  const handleCart = (e) => {
    console.log(e);
  };
  return (
    <Stack
      w={"90%"}
      border={"1px solid blue"}
      m={"auto"}
      p={10}
      mt={10}
      gap={30}
      direction={"row"}>
      <Box
        w={"500px"}
        m={"auto"}
        h={"300px"}
        // border={"1px solid green"}
        //   textAlign={"center"}
        //   justifyItems={"center"}
        boxShadow="dark-lg"
        rounded="md"
        bg="whiteAlpha.600">
        <Image src={data.image} w={"100%"} h={"100%"} />
      </Box>

      <Box
        border={"1px solid red"}
        w={"500px"}
        px={20}
        py={10}
        textAlign={"center"}>
        <Text fontSize={25} fontWeight={"bold"}>
          title : {data.title}
        </Text>
        <br />
        <Text fontSize={20}>price : {data.price}</Text>
        <Text fontSize={20}>brand : {data.brand}</Text>

        <Text fontSize={17}>category : {data.gender}</Text>
        <Text fontSize={17}>discount-price : {data.discount}%</Text>
        <br />
        <br />
        <Button onClick={() => handleCart(id)} ml={7} p={4}>
          Add to Cart
        </Button>
      </Box>
    </Stack>
  );
}
