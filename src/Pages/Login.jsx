import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginData } from "./Redux/Auth/action";
import {
  Input,
  Button,
  Text,
  Box,
  VStack,
  Spacer,
  Image,
  border,
  Stack,
  HStack,
  Modal,
  useToast,
} from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const toast = useToast();

  const store = useSelector((data) => {
    return data.authReducer;
  });
  console.log(store);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      email,
      password,
    };

    dispatch(LoginData(userdata));
    if (store.token !== "") {
      toast({
        description: "Login Successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top-center",
      });
    } else
      toast({
        description: "Login error",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-center",
      });

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <NavBar />
      <Box
        bgGradient="linear(to top, #fbc2eb 0%, #a6c1ee 100%)"
        w={"100%"}
        h={"100vh"}
        // mt={'2.5%'}
        // border={"1px solid blue"}
        // py={}
      >
        <Text
          textAlign={"center"}
          py={10}
          fontSize="3xl"
          fontWeight="bold"
          textShadow="1px 1px #ff0000"
          color={"blue.700"}>
          Login Page
        </Text>

        <Box
          display={"flex"}
          // bgGradient="linear(-20deg, #dcb0ed 0%, #99c99c 100%)"

          m={"auto"}
          w={"70%"}
          // mx={30}
          p={2}
          // border={"1px solid red"}/
          boxShadow="2xl"
          rounded="md">
          <Box
            // border={"1px solid green"}
            w={"45%"}
            m={"auto"}
            h={"500px"}
            // boxShadow="2xl"
            p="10"
            rounded="md">
            <Text
              textShadow="1px 1px #ff0000"
              color={"blue.700"}
              fontWeight={100}
              textAlign={"center"}
              fontSize="xl">
              Login to Abc
            </Text>
            <form onSubmit={handleSubmit}>
              <br />
              <br />
              <Input
                required
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="#9C7CA5"
                value={email}
              />
              <br />
              <br />
              <Input
                required
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="#9C7CA5"
                value={password}
              />
              <br /> <br /> <br />
              <Button
                type="submit"
                px={20}
                ml={10}
                background={"#BFA9C6"}
                color={"gray.600"}>
                Login
              </Button>
              {/* <Toast text={"Login"}/> */}
            </form>
            <br />
            <br />
            <br />
            <Text
              textShadow="1px 1px #ff0000"
              color={"blue.700"}
              fontWeight={100}
              textAlign={"center"}
              fontSize="xl">
              new to abc
            </Text>
          </Box>

          <Box
            w={"70%"}
            m={"auto"}
            h={"500px"}
            // border={'1px solid black'}
            // boxShadow="2xl" rounded="md" p={3} h={"500px"}
          >
            <Image
              width={["100%"]}
              objectFit={"cover"}
              mt={["6%"]}
              src={
                "https://images.pexels.com/photos/7712474/pexels-photo-7712474.jpeg?cs=srgb&dl=pexels-maria-camila-casta%C3%B1o-7712474.jpg&fm=jpg"
              }
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
