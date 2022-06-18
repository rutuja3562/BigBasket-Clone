import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,Button
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";

export const Payment = () => {
const navigate = useNavigate()
    
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Box
      width={"60%"}
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

      <Flex padding={"1rem"} textAlign="left" border={"1px solid #e8e8e8"}>
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
            <FormLabel fontSize={"13px"} fontWeight={400} htmlFor="number">
              Card Number
            </FormLabel>
            <Input
              id="number"
              type="number"
              fontSize={"12px"}
              fontWeight={300}
              onChange={handleInputChange}
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
              <FormHelperText>
              </FormHelperText>
            ) : (
              <FormErrorMessage>Enter Card Number</FormErrorMessage>
            )}
            <Flex width="100%" justifyContent={"space-between"}>
              <Box width="49%">
                <FormLabel fontSize={"13px"} fontWeight={400} htmlFor="card">
                Expire Year
                </FormLabel>
                <Input
                  type="number"
                  fontSize={"12px"}
                  fontWeight={300}
                  onChange={handleInputChange}
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
                  <FormHelperText>
                  </FormHelperText>
                ) : (
                  <FormErrorMessage></FormErrorMessage>
                )}
              </Box>
              <Box width="49%">
                <Box>
                  <FormLabel fontSize={"13px"} fontWeight={400} htmlFor="cvv">
                    cvv
                  </FormLabel>
                  <Input
                    type="number"
                    fontSize={"12px"}
                    fontWeight={300}
                    onChange={handleInputChange}
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
                    <FormHelperText>
                    </FormHelperText>
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
                onClick={()=>{
                  alert("Payment is Successfull!");
                  navigate('/')
                }}
              >
                Place Order & Pay
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};
// <FormControl>
//   <Box>
//     <FormLabel fontSize={"12px"} fontWeight={300} htmlFor="First-name">
//       Card Number
//     </FormLabel>
//     <Input width={"100%"} id="first-name" placeholder="Enter Card Number" />
//   </Box>
// </FormControl>;
