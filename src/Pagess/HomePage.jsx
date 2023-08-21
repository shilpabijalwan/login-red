import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavBar from "../Components/NavBar";
import { ProductCard } from "../Components/ProductCard";
import { ProductList } from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";
export default function HomePage() {
  return (
    <>

      <NavBar />
      <Box display={'flex'}>
        <Sidebar />
        <ProductList />
      </Box>
    </>
  );
}
