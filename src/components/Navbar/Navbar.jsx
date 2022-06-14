import React from "react";
import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";
import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";

export const Navbar = () => {
  return (
    <Box width="75%" margin={"auto"} border="1px solid black">
      <Box width="40%" float={"right"} border={"1px solid blue"}>
        <Flex
          float={"right"}
          width="100%"
          padding={"0.5rem 0 0 0"}
          fontWeight="300"
          fontSize="12px"
          alignItems={"center"}
        >
          <Box mr={"1rem"}>
            <Flex alignItems={"center"}>
              <PhoneIcon mr={"0.5rem"} />
              <Text>1860 123 1000</Text>
            </Flex>
          </Box>
          <Box mr={"1rem"}>
            <Flex alignItems={"center"}>
              <Box mr={"0.5rem"}>
                <ImLocation2 size="16px" />
              </Box>
              <Text>56004 Bangalore</Text>
            </Flex>
          </Box>
          <Box mr={"1rem"}>
            <Flex alignItems={"center"}>
              <Box mr={"0.5rem"}>
                <AiOutlineUser size="16px" />
              </Box>
              <Text>BigBasketeer</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mt="1rem">
        <Flex>
          <Box>
            <img
              height={"300px"}
              src="https://www.bbassets.com/static/staticContent/bb_logo.png"
              alt=""
            />
          </Box>
          <Box
            mt={"1rem"}
            pt={"1rem"}
            border={"1px solid blue"}
            ml={"3rem"}
            width={"90%"}
          >
            <Flex>
              <Input type="text" placeholder="" />
              <Button>
                <SearchIcon />
              </Button>
            </Flex>
          </Box>
          <Box mt={"2rem"}>hjndcs</Box>
        </Flex>
      </Box>
      <Box>gdfhb</Box>
    </Box>
  );
};