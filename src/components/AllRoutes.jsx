import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar/Navbar";
import { Topnavbar } from "./Navbar/Topnavbar";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";
import { Route, Router, Routes } from "react-router";
import { Product } from "./Product/Product";
import { ProductDetails } from "./Product/ProductDetails";
import { Cart } from "./Cart/Cart";
import { Checkout } from "./Checkout";
import { Payment } from "./Payment/Payment";
import { Signup } from "./Signup/Signup";
import SignIn from "./Login/SignIn";
export const AllRoutes = () => {
  return (
    <Box width={"100%"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        {/*<Route path="/signup" element={<Signup/>}></Route>*/}
      </Routes>
      <Footer />
    </Box>
  );
};
