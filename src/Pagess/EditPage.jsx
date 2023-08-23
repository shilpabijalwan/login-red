/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { Box, Stack, Text, Input, Button, useToast } from "@chakra-ui/react";

import NavBar from "../Components/NavBar";
import { Select } from "@chakra-ui/react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Get_Product, editProduct } from "../Pages/Redux/Productreducer/action";
const intialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
};
export default function EditPage() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState(intialState);
  const [success, setSuccess] = useState(false);
  //   console.log(data);

  const products = useSelector((data) => {
    return data.productReducer.products;
  });

  useEffect(() => {
    const dataa = products.find((ele) => {
      return ele.id === +id;
    });

    setData(dataa);
    // console.log(dataa);
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // console.log(name, value);
    if (type === "number") {
      setData((pre) => {
        return {
          ...pre,
          [name]: +value,
        };
      });
    } else {
      setData((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(e)
    dispatch(editProduct(data, id)).then(() => {
      setSuccess(true);
      setTimeout(() => {
        Navigate("/");
      }, 500);
    });
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
          fontWeight={"bold"}>
          Edit Product with Product id {id}
        </Text>
        <form action="" onSubmit={handlesubmit}>
          <Stack
            spacing={5}
            border={"1px solid black"}
            px={20}
            py={10}
            width={"500px"}
            m={"auto"}>
            {success && (
              <Box
                position={"absolute"}
                border={"1px solid gray"}
                bgColor={"gray.900"}
                width={400}
                h={200}
                p={20}
                color={"cyan"}>
                <Text fontSize={30} fontWeight={"bold"}>
                  Product Edited successfully
                </Text>
              </Box>
            )}

            <Text
              textAlign={"center"}
              color={"cyan.600"}
              fontSize={30}
              fontWeight={"10% "}>
              Edit Product's Details
            </Text>
            <hr />

            <Input
              type="text"
              name="image"
              value={data?.image}
              //   placeholder="Image"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              name="title"
              value={data?.title}
              //   placeholder="Title"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="number"
              name="price"
              value={data?.price}
              //   placeholder="Price"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="text"
              name="brand"
              value={data?.brand}
              //   placeholder="Brand"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="number"
              name="discount"
              value={data?.discount}
              //   placeholder="Discount"
              onChange={(e) => handleChange(e)}
            />

            <Select
              placeholder="Select Category"
              name="gender"
              onChange={(e) => handleChange(e)}
              value={data?.gender}>
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
            <input
              type="text"
              // value={prodata.discount}
            />
            <Button type="submit" w={150} ml={"30%"} colorScheme="cyan">
              Edit
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}
