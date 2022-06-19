import React, { useEffect } from "react";
import { fetchtoCart } from "../Redux/product/action";
import { useDispatch, useSelector } from "react-redux";
import { Box ,Text} from "@chakra-ui/react";

export const CartLength = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchtoCart());
  }, []);
  return <Box><Text>{cart.length}</Text></Box>;
};
