import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // Save to localStorage (for demo login)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup successful! You can now log in.");
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bgGradient="linear(to-r, #ffffff, #ffefba)"
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
            textTransform="uppercase"
            fontWeight="bold"
            color="#DC2D13"
          >
            Sign Up
          </Text>

          <form onSubmit={handleSignUp}>
            <FormControl mb={4}>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                size="lg"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                size="lg"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
              />
            </FormControl>

            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="5px"
              fontSize="16px"
            >
              Already have an account?{" "}
              <Text
                as={Link}
                to="/login"
                textDecoration="underline"
                color="#DC2D13"
                cursor="pointer"
                _hover={{ color: "#FF6F00" }}
              >
                Log In
              </Text>
            </Text>

            <Button
              type="submit"
              mt={6}
              backgroundColor="#DC2D13"
              color="white"
              fontSize="18px"
              _hover={{ backgroundColor: "#FF6F00" }}
              width="100%"
              height="55px"
            >
              Sign Up
            </Button>
          </form>
        </VStack>
      </Box>
    </Box>
  );
}

export default SignUpForm;
