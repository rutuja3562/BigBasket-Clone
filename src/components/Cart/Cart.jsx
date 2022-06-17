import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocartaction,
  delCartitems,
  fetchCartitems,
} from "../../Redux/product/action";
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
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
export const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const [cartLength, setCartLength] = useState(cart.length);
  console.log("...cart....", cart);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchCartitems());
  //   }, [dispatch]);
  const handleDelet = (e) => {
    // console.log("LL",e)
    dispatch(delCartitems(e));
  };
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
              </Tr>
              <Tr
                fontSize={14}
                textAlign={"left"}
                width="100%"
                bgColor="#e8e8e8"
              >
                Fruits & Vegetables {cart.length} items {0}
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((e) => {
                return (
                  <Tr
                    key={e._id}
                    fontSize={"12px"}
                    justifyContent={"space-between"}
                  >
                    <Td fontSize={"12px"}>
                      <p fontSize={"14px"} fontWeight={300}>
                        {e.brand}
                      </p>
                      <p fontSize={"12px"} fontWeight={300}>
                        {e.title}
                      </p>
                    </Td>
                    <Td>
                      {e.price}
                      <br /> {e.price * 0.5}
                    </Td>
                    <Td>
                      <Button variant={"outline"} m={"2px"}>
                        -
                      </Button>
                      <Button variant={"outline"} m={"2px"}>
                        1
                      </Button>
                      <Button variant={"outline"} m={"2px"}>
                        +
                      </Button>
                    </Td>
                    <Td>{e.price * 1}</Td>
                    <Td>
                      <CloseIcon onClick={() => handleDelet(e)} />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent={"space-between"} mt={8}>
          <Box width={"45%"} border="1px">
            <Button
              variant={"outline"}
              float={"left"}
              onClick={() => {
                cart.length = 0;
                setCartLength(0);
              }}
            >
              Empty Basket
            </Button>
          </Box>
          <Box width={"45%"} border="1px"></Box>
        </Flex>
      </Box>
    </Box>
  );
};
