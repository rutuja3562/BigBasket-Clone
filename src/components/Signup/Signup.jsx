import React from "react";
import {
  Box,
  Button,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { LogedIn } from "../Login/LogedIn";
export const Signup = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const { auth, handleAuth } = useContext(AuthContext);
  var random = Math.floor(Math.random(4) * 10000);
  const handleotp = () => {
    alert(random);
  };
  const checkotp = (e) => {
    console.log(e.target.value);
    console.log(random);
    setTimeout(() => {
      if (e.target.value == random) {
        // alert("Login Sucessful");
         navigate("/product");
      } else {
        alert("Login Unsucessful");
      }
    }, 4000);
  };
  
  return (
    <Box width="100%" height={"500px"} margin={"auto"} bg="white">
      <Box margin={"auto"} width={"100%"} mt={"5rem"} padding="1rem">
        <Box fontSize={"12px"} fontWeight="300">
          <Text
            fontSize={"16px"}
            fontWeight="650"
            color={"#84c225"}
            mb={"2rem"}
            alignItems="center"
          >
            LOIN/SIGN UP
          </Text>
          <Input
            textAlign={"left"}
            _hover={{ bg: "white" }}
            _expanded={{ bg: "white" }}
            _focus={{ boxShadow: "red" }}
            focusBorderColor="red"
            errorBorderColor="red"
            borderRadius="0"
            borderWidth="0px"
            borderBottomWidth={"1px"}
            borderColor="#84c225"
            type="number"
            placeholder="Enter Mobile Number (10-digit)"
            fontSize={"12px"}
            fontWeight="300"
            mb="2rem"
            maxLength="10"
            minLength="10"
            required
          />
          <Button
            variant={"outline"}
            fontSize={"14px"}
            fontWeight="450"
            color="black"
            width={"100%"}
            borderColor="#84c225"
            mb={"1rem"}
            onClick={handleotp}
          >
            Login using Mobile Number
          </Button>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter your OTP"
            aria-label="Username"
            aria-describedby="basic-addon1"
            textAlign={"left"}
            _hover={{ bg: "white" }}
            _expanded={{ bg: "white" }}
            _focus={{ boxShadow: "red" }}
            focusBorderColor="red"
            errorBorderColor="red"
            borderRadius="0"
            borderWidth="0px"
            borderBottomWidth={"1px"}
            borderColor="#84c225"
            fontSize={"12px"}
            fontWeight="300"
            mb="2rem"
            maxLength="10"
            minLength="10"
            required
            onChange={(e) => {
              checkotp(e);
            }}
          />
          <Button
            varient={"solid"}
            bg={"#84c225"}
            schema="white"
            color="white"
            width={"100%"}
            fontSize={"14px"}
            fontWeight="450"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
