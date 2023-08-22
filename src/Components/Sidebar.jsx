import {
  Box,
  Input,
  Stack,
  Checkbox,
  Text,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
export default function Sidebar() {
  // const [sort, setSort] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  ///////////////////////////////////////
  //////////////////////////////////////
  const handlechecked = (e) => {
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

  const handleSort = (e) => {
    // setSort(e.target.value);
  };
  ///////////////////////////////////////////
  //////////////////////////////////////////////
  useEffect(() => {
    const params = {
      category,
      // sort,
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
          name="male"
          value={"men"}
          isChecked={category.includes("men")}>
          Men
        </Checkbox>
        <Checkbox
          colorScheme="green"
          onChange={handlechecked}
          name="female"
          value={"women"}
          isChecked={category.includes("women")}>
          Women
        </Checkbox>
        <Checkbox
          colorScheme="green"
          onChange={handlechecked}
          name="kids"
          value={"kids"}
          isChecked={category.includes("kids")}>
          Kids
        </Checkbox>
      </Stack>
      <Text fontWeight={"bold"} color={"blue.700"} fontSize={20} mt={10}>
        Sort by price
      </Text>
      <Stack mt={5}>
        <RadioGroup>
          <VStack spacing={5} direction="row">
            <Radio colorScheme="green" value="asc" onChange={handleSort}>
              Low to high
            </Radio>
            <Radio colorScheme="green" value="desc" onChange={handleSort}>
              High to Low
            </Radio>
          </VStack>
        </RadioGroup>
      </Stack>
    </Box>
  );
}
