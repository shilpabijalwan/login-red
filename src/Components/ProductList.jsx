import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { Get_Product } from "../Pages/Redux/Productreducer/action";
import { Box, Center, Grid, Text } from "@chakra-ui/react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

export function ProductList() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const store = useSelector((data) => {
    return data.productReducer;
  });
  const { isLoading, isError } = store;
  //   console.log(store);
  // console.log(searchParams.getAll("category"));
  const obj = {
    params: {
      gender: searchParams.getAll("category"),
    },
  };
  // console.log(location.search);

  useEffect(() => {
    dispatch(Get_Product(obj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  return isLoading ? (
    <Box
      // border={"1px solid blue"}
      w={"70%"}
      margin={"auto"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        alignItems={"center"}
        // border={"1px solid blue"}
        // justifyContent={"center"}/
        mx={"500px"}
      />
    </Box>
  ) : isError ? (
    <Box border={"1px solid gray"} w={"70%"} m={"auto"} textAlign={"center"}>
      <Text p={100} fontSize={30} fontWeight={"bolder"}>
        Something went wrong please refresh
      </Text>
    </Box>
  ) : (
    <Grid
      w={"95%"}
      px={10}
      py={10}
      templateColumns="repeat(5, 1fr)"
      gap={6}
      //   border={"1px solid blue"}
      m={"auto"}>
      {store.products.length > 0 &&
        store.products.map((ele) => {
          return <ProductCard key={ele.id} {...ele} />;
        })}
    </Grid>
  );
}
