import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Topnavbar } from "../Navbar/Topnavbar";
import { LogedIn } from "../Login/LogedIn";
import { Razor } from "../Razor";
export const Payment = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const isError = input === "";
  const [card, setCard] = useState("");
  const [cvv, setCVV] = useState("");
  const [year, setYear] = useState("");

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const total = cart.reduce(function (acc, cv) {
    console.log(cv.price);
    return acc + Math.floor(cv.price);
  }, 0);
  var saved = 0;
  for (let e of cart) {
    saved =
      saved +
      (Math.floor(e.price) - Math.floor(e.price - (10 * e.price) / 100));
  }
  return (
    <Box width={"100%"}>
      <Topnavbar />
      <Box width={"75%"} margin="auto" mt="3rem" mb="3rem" >
        <Flex width={"100%"} justifyContent={"center"}>
          <Box
            width={"50%"}
            padding="2rem"
            border={"1px solid #e8e8e8"}
            height="250px"
            mt="1.5rem"
            bg="#f6f6f6"
          >
            <Text
              borderBottom={"1px solid #e8e8e8"}
              mb={"3px"}
              textAlign={"left"}
              fontSize={"15px"}
              fontWeight={450}
            >
              Order Summery
            </Text>
            <Box
              textAlign={"left"}
              fontSize={"14px"}
              fontWeight={400}
              ml={"1rem"}
            >
              <Text mb={"3px"}>
                Basket value Rs {Math.floor(total - saved)}
              </Text>
              <Text borderBottom={"1px solid #e8e8e8"} mb={"3px"}>
                Delivery Charge <span color="lightgreen">Free</span>
              </Text>
              <Flex
                alignItems={"center"}
                padding="2px"
                justifyContent={"space-between"}
              >
                <Text
                  mb={"3px"}
                  textAlign={"left"}
                  fontSize={"15px"}
                  fontWeight={450}
                  pb="1rem"
                  pt="1rem"
                >
                  Total Amount Payable
                </Text>
                <Text fontSize={"15px"} fontWeight={450}>
                  Rs {Math.floor(total - saved)}
                </Text>
              </Flex>
            </Box>
            <Box mt="1 rem">
              <Razor />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
