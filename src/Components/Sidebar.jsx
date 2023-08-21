import { Box, Input, Stack, Checkbox, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
export default function Sidebar() {
  const [category, setCategory] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  ///////////////////////////////////////
  //////////////////////////////////////
  const handlechecked = (e) => {
    // const { name, checked } = e.target;
    // console.log(name, checked);
    let newCategory = [...category];
    const value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele) => {
        return ele !== value;
      });
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    // console.log(category);
  };
  ///////////////////////////////////////////
  //////////////////////////////////////////////
  useEffect(() => {
    const params = {
      category,
    };
    setSearchParams(params);
  }, [category]);
  return (
    <Box
      // border={"1px solid blue"}
      w={200}
      px={10}
      py={10}
      mt={10}>
      <Stack spacing={5} direction="column">
        <Text fontWeight={"bold"} color={"blue.700"} fontSize={20}>
          Filter by categories
        </Text>
        <Checkbox
          colorScheme="green"
          onChange={handlechecked}
          name="men"
          value={"men"}>
          Men
        </Checkbox>
        <Checkbox
          colorScheme="green"
          onChange={handlechecked}
          name="women"
          value={"women"}>
          Women
        </Checkbox>
        <Checkbox
          colorScheme="green"
          onChange={handlechecked}
          name="kids"
          value={"kids"}>
          Kids
        </Checkbox>
      </Stack>
    </Box>
  );
}
