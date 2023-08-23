import { Box, Stack, Text, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Pages/Redux/Productreducer/action";
const intialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
};
export default function Admin() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(intialState);
  // console.log(product);
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "number") {
      setProduct((pre) => {
        return {
          ...pre,

          [name]: +value,
        };
      });
    } else {
      setProduct((pre) => {
        return {
          ...pre,

          [name]: value,
        };
      });
    }
    console.log(product);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setProduct(intialState);

    dispatch(addProduct(product));
    // console.log(product);
  };
  return (
    <>
      <NavBar />
      <Box
        px={20}
        //  border={'1px solid blue'}
      >
        <Text
          textAlign={"center"}
          pb={10}
          color={"cyan.600"}
          fontSize={30}
          fontWeight={"10% "}>
          Welcome Admin
        </Text>

        <form action="" onSubmit={handlesubmit}>
          <Stack
            spacing={5}
            border={"1px solid black"}
            px={20}
            py={10}
            width={"500px"}
            m={"auto"}>
            <Text
              textAlign={"center"}
              color={"cyan.600"}
              fontSize={30}
              fontWeight={"10% "}>
              Add new product
            </Text>
            <hr />
            <Input
              type="text"
              name="image"
              value={product.image}
              placeholder="Image"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              name="title"
              value={product.title}
              placeholder="Title"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="number"
              name="price"
              value={product.price}
              placeholder="Price"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              name="brand"
              value={product.brand}
              placeholder="Brand"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="number"
              name="discount"
              value={product.discount}
              placeholder="Discount"
              onChange={(e) => handleChange(e)}
            />

            <Select
              placeholder="Select Category"
              name="gender"
              onChange={(e) => handleChange(e)}
              value={product.gender}>
              <option name="gender" value="men">
                Men
              </option>
              <option name="gender" value="women">
                Women
              </option>
              <option name="gender" value="kids">
                Kids
              </option>
            </Select>
            <Button type="submit" w={150} ml={"30%"} colorScheme="cyan">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}
