import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";
import { Topnavbar } from "./Navbar/Topnavbar";
export const Checkout = () => {
  const navigate = useNavigate();
  return (
    <Box width={"100%"}>
    <Topnavbar/>
      <Box
        width={"75%"}
        margin="auto"
        mt="3rem"
        mb={"3rem"}
        p={"2rem"}
        border={"1px solid #e8e8e8"}
        //   border={"1px solid black"}
        bg="#f6f6f6"
        pb="5rem"
      >
        <Box>
          <Text textAlign={"left"} mt="10px" mb={"10px"}>
            Personal Details
          </Text>
          <FormControl
            isRequired
            variant={"outline"}
            display={"flex"}
            justifyContent="space-between"
          >
            <Box width={"33%"} mr={"10px"}>
              <FormLabel
                fontSize={"12px"}
                fontWeight={300}
                htmlFor="First-name"
              >
                Enter First Name
              </FormLabel>
              <Input
                fontSize={"12px"}
                width={"100%"}
                id="first-name"
                placeholder=""
              />
            </Box>
            <Box width={"33%"} mr={"10px"}>
              <FormLabel fontSize={"12px"} fontWeight={300} htmlFor="Last-name">
                Enter Last Name
              </FormLabel>
              <Input
                fontSize={"12px"}
                width={"100%"}
                id="first-name"
                placeholder=""
              />
            </Box>
            <Box width={"33%"} mr={"10px"}>
              <FormLabel
                fontSize={"12px"}
                fontWeight={300}
                htmlFor="Contact-name"
              >
                Enter Contact Number
              </FormLabel>
              <Input
                fontSize={"12px"}
                width={"100%"}
                id="contact-number"
                placeholder=""
              />
            </Box>
          </FormControl>
        </Box>
        <Box>
          <Text textAlign={"left"} mt="10px" mb={"10px"}>
            Address Details
          </Text>
          <FormControl
            isRequired
            variant={"outline"}
            justifyContent="space-between"
          >
            <Box width={"100%"} display={"flex"}>
              <Box width={"25%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  House Number
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                />
              </Box>
              <Box width={"75%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Enter Appartment name
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                />
              </Box>
            </Box>
            <Box width={"100%"} display={"flex"} mt="1rem">
              <Box width={"50%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Enter Street Details
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                />
              </Box>
              <Box width={"50%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Enter landmark for easy reach out
                </FormLabel>
                <Input
                  required={"required"}
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  variant={"outline"}
                  _hover={{ bg: "white" }}
                  _expanded={{ bg: "white" }}
                  _focus={{ boxShadow: "#84c225" }}
                  focusBorderColor="#84c225"
                  // isInvalid
                  colorScheme="white"
                  errorBorderColor="#84c225"
                  borderRadius="0"
                  borderWidth="0.025px"
                />
              </Box>
            </Box>
            <Box width={"100%"} display={"flex"} mt="1rem">
              <Box width={"25%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  City Name
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                />
              </Box>
              <Box width={"50%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Area
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                />
              </Box>
              <Box width={"25%"} mr={"10px"}>
                <FormLabel
                  fontSize={"12px"}
                  fontWeight={300}
                  htmlFor="Last-name"
                >
                  Pin Code
                </FormLabel>
                <Input
                  fontSize={"12px"}
                  width={"100%"}
                  id="first-name"
                  placeholder=""
                  required
                />
              </Box>
            </Box>
            <Box float={"left"} m={"1rem 0 1rem 0.25rem "}>
              <Button variant={"outline"} onClick={() => navigate("/payment")}>
                Add Address
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
