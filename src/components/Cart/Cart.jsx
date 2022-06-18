import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchtoCart, removeItem } from "../../Redux/product/action";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Text,
  Heading,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router";
export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  
  // const [cartLength, setCartLength] = useState(cart.length);
  const [count, setCount] = useState(1);
  useEffect(() => {
    dispatch(fetchtoCart());
  }, [dispatch,cart.length]);
  const a = [];
  const handleDelet = (id) => {
    dispatch(removeItem(id));
  };
  let Total = 0;
  let saved = 0;
  return (
    <Box width="75%" m={"auto"}>
      <Box
        width="100%"
        margin="auto"
        p="1rem"
        mt="1.5rem"
        border="1px solid #e8e8e8"
        // border="1px solid red"
      >
        <Text
          fontSize={"24px"}
          textAlign={"left"}
          fontWeight={300}
          borderBottom={"1px solid #e8e8e8"}
          pb={"6px"}
        >
          YOUR BASKET {cart.length}
        </Text>

        <TableContainer width="99%">
          <Table variant="simple">
            <Thead width="99%">
              <Tr
                bg={"#555555"}
                color={"white"}
                justifyContent={"space-between"}
              >
                <Th color={"white"}>ITEM DESCRIPTION</Th>
                <Th color={"white"}>UNIT PRICE</Th>
                <Th color={"white"}>QUANTITY</Th>
                <Th color={"white"}>SUBTOTAL</Th>
                <Th color={"#555555"}>......</Th>
                <Th color={"black"} bg={"#c6cc74"}>
                  Saving
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart?.map((e) => {
                {
                  Total = Total+Math.floor(Total + e.price);
                  
                }
                {
                  saved = Math.floor(
                    saved + (e.price - (e.price - (10 * e.price) / 100))
                  );
                }
                return (
                  <Tr
                    key={e._id}
                    fontSize={"12px"}
                    justifyContent={"space-between"}
                  >
                    <Td fontSize={"12px"}>
                      {e.brand}
                      <br></br>
                      {e.title}
                    </Td>
                    <Td>
                      Rs {Total-saved}
                      <br></br>
                      Rs {Total}
                    </Td>
                    <Td>
                      <Button
                        variant={"outline"}
                        m={"2px"}
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </Button>
                      <Button variant={"outline"} m={"2px"}>
                        {count}
                      </Button>
                      <Button
                        variant={"outline"}
                        m={"2px"}
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </Button>
                    </Td>
                    <Td>Rs {Total-saved}</Td>
                    <Td>
                      <CloseIcon onClick={() => handleDelet(e._id)} />
                    </Td>
                    <Td>
                      {" "}
                      Rs{" "}
                      {saved}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent={"space-between"} mt={8}>
          <Box width={"45%"}>
            <Button
              variant={"outline"}
              float={"left"}
              onClick={() => {
                
              }}
            >
              Empty Basket
            </Button>
          </Box>
          <Box width={"45%"} border="1px solid #e8e8e8 ">
            <Flex
              justifyContent={"space-between"}
              p="1rem"
              textAlign={"left"}
              fontSize="14px"
              fontWeight={400}
            >
              <Box>
                <Text>SubTotal</Text>
                <Text>Delivery Charges</Text>
              </Box>
              <Box>
                <Text>Rs {Total-saved}</Text>
                <Text>***</Text>
              </Box>
              <Box borderLeft={"1px solid #e8e8e8"} color="red" pl="2px">
                <Text>You saved!</Text>
                <Text>Rs {saved}</Text>
              </Box>
            </Flex>
            <Flex
              textAlign={"left"}
              border={"1px solid #e8e8e8"}
              padding="2rem"
              justify={"space-around"}
            
            >
              <Heading as={"h6"} fontWeight="250">
                TOTAL{" "}
              </Heading>
              <Heading as={"h6"} fontWeight="250">
                {" "}
                RS {Math.floor(Total-saved)}
              </Heading>
            </Flex>
            <Box float={"right"}>
              <Button variant={"outline"} onClick={()=>navigate("/checkout")}> CheckOut</Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
