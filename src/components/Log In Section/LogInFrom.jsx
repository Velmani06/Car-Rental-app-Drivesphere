import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function LogInFrom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("isLoggedIn", "true");

      toast({
        title: "Login Successful ✅",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      });

      // ✅ Smooth navigate
      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 1200);
    } else {
      toast({
        title: "Invalid credentials!",
        description: "Please check your email and password.",
        status: "error",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bgGradient="linear(to-r, white, yellow.100)"
      px={4}
    >
      <Box
        maxW="450px"
        w="100%"
        p={8}
        borderWidth="1px"
        borderRadius="2xl"
        backgroundColor="white"
        boxShadow="2xl"
      >
        <VStack spacing={6}>
          <Text
            fontSize="36px"
            fontWeight="bold"
            textTransform="uppercase"
            color="#DC2D13"
          >
            Log In
          </Text>

          <form onSubmit={handleLogin}>
            <FormControl mb={4}>
              <FormLabel fontSize="18px">Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                required
              />
            </FormControl>

            <FormControl mb={2}>
              <FormLabel fontSize="18px">Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                required
              />
              <Text
                textAlign="right"
                mt={2}
                fontSize="14px"
                color="gray.600"
                cursor="pointer"
                _hover={{ color: "#DC2D13", textDecoration: "underline" }}
              >
                Forgot Password?
              </Text>
            </FormControl>

            <Button
              type="submit"
              width="100%"
              size="lg"
              mt={4}
              backgroundColor="#DC2D13"
              color="white"
              fontSize="18px"
              _hover={{ backgroundColor: "#FF6F00" }}
            >
              Log In
            </Button>

            <HStack justifyContent="center" mt={6}>
              <Text fontSize="16px" color="gray.700">
                Don’t have an account?
              </Text>
              <Text
                as={Link}
                to="/signup"
                color="#DC2D13"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline", color: "#FF6F00" }}
              >
                Sign Up
              </Text>
            </HStack>
          </form>
        </VStack>
      </Box>
    </Box>
  );
}

export default LogInFrom;
