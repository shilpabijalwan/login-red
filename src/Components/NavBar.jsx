import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("#A9A6C9", "gray.900")} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              fontWeight={"bold"}
              fontSize={20}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}

              <Link to={"/"}>Homepage</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/admin"}>Admin</Link>
              <Link to={"/cart"}>Cart</Link>
            </HStack>
          </HStack>
          <Text fontWeight={"bold"} fontSize={20}>
            username
          </Text>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            fontSize={20}
            color={"facebook.900"}
            fontWeight={"bold"}>
            <Stack as={"nav"} spacing={4}>
              <Link to={"/"}>Homepage</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/admin"}>Admin</Link>
              <Link to={"/cart"}>Cart</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
