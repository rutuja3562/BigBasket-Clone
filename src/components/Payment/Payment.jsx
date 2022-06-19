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
    saved = saved + (Math.floor(e.price )- Math.floor(e.price - (10 * e.price) / 100));
  }
  return (
    <Box width={"100%"}>
      <Topnavbar />
      <Box width={"75%"} margin="auto">
        <Box></Box>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Box
            width={"70%"}
            margin="auto"
            fontSize={"14px"}
            fontWeight="300"
            mt="1rem"
            bg="#f6f6f6"
          >
            <Text
              textAlign={"left"}
              padding="1rem"
              fontSize={"14px"}
              fontWeight={"400"}
            >
              Payment Method
            </Text>
            <Flex
              padding={"1rem"}
              textAlign="left"
              border={"1px solid #e8e8e8"}
            >
              <Box width={"20%"} borderRight={"1px solid #e8e8e8"} bg="white">
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  Credit/Debit Card
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  Net Banking{" "}
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  Wallet
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  UPI
                </Text>
                <Text p="1rem">Cash/Card on Delivery</Text>
              </Box>
              <Box bg="white" width="80%" pt="1rem">
                <FormControl isInvalid={isError} width="60%" margin={"auto"}>
                  <FormLabel
                    fontSize={"13px"}
                    fontWeight={400}
                    htmlFor="number"
                  >
                    Card Number
                  </FormLabel>
                  <Input
                    value={card}
                    id="number"
                    type="number"
                    fontSize={"12px"}
                    fontWeight={300}
                    onChange={(e) => {
                      setCard(e.target.value);
                    }}
                    variant={"outline"}
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                    _focus={{ boxShadow: "#e8e8e8" }}
                    focusBorderColor="#e8e8e8"
                    colorScheme="white"
                    errorBorderColor="#e8e8e8"
                    borderRadius="0"
                    borderWidth="0.025px"
                    placeholder="Enter Card Number"
                  />
                  {!isError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage>Enter Card Number</FormErrorMessage>
                  )}
                  <Flex width="100%" justifyContent={"space-between"}>
                    <Box width="49%">
                      <FormLabel
                        fontSize={"13px"}
                        fontWeight={400}
                        htmlFor="card"
                      >
                        Expire Year
                      </FormLabel>
                      <Input
                        type="number"
                        fontSize={"12px"}
                        fontWeight={300}
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
                        variant={"outline"}
                        _hover={{ bg: "white" }}
                        _expanded={{ bg: "white" }}
                        _focus={{ boxShadow: "#e8e8e8" }}
                        focusBorderColor="#e8e8e8"
                        colorScheme="white"
                        errorBorderColor="#e8e8e8"
                        borderRadius="0"
                        borderWidth="0.025px"
                      />
                      {!isError ? (
                        <FormHelperText></FormHelperText>
                      ) : (
                        <FormErrorMessage></FormErrorMessage>
                      )}
                    </Box>
                    <Box width="49%">
                      <Box>
                        <FormLabel
                          fontSize={"13px"}
                          fontWeight={400}
                          htmlFor="cvv"
                        >
                          cvv
                        </FormLabel>
                        <Input
                          type="number"
                          fontSize={"12px"}
                          fontWeight={300}
                          onChange={(e) => {
                            setCVV(e.target.value);
                          }}
                          variant={"outline"}
                          _hover={{ bg: "white" }}
                          _expanded={{ bg: "white" }}
                          _focus={{ boxShadow: "#e8e8e8" }}
                          focusBorderColor="#e8e8e8"
                          colorScheme="white"
                          errorBorderColor="#e8e8e8"
                          borderRadius="0"
                          borderWidth="0.025px"
                        />
                        {!isError ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage></FormErrorMessage>
                        )}
                      </Box>
                    </Box>
                  </Flex>
                  <Box mt="1 rem">
                    <Button
                      variant={"solid"}
                      _hover={{ bg: "#84c225" }}
                      _expanded={{ bg: "#84c225" }}
                      _focus={{ boxShadow: "#e8e8e8" }}
                      focusBorderColor="#e8e8e8"
                      colorScheme="white"
                      errorBorderColor="#e8e8e8"
                      borderRadius="0"
                      borderWidth="0.025px"
                      bg="#84c225"
                      onClick={() => {
                        if (cvv == "" || year == "" || card == "") {
                          alert("Enter all Fields");
                        } else {
                          alert("Payment is Successfull!");
                          navigate("/");
                        }
                      }}
                    >
                      Place Order & Pay
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Flex>
          </Box>
          <Box
            width={"33%"}
            padding="1rem"
            border={"1px solid #e8e8e8"}
            height="200px"
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
          </Box>
        </Flex>
      </Box>
     
    </Box>
  );
};
