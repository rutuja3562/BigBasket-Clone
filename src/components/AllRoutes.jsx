import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar/Navbar";
import { Topnavbar } from "./Navbar/Topnavbar";
import { Home } from "./Home/Home";
import { Footer } from "./Footer/Footer";
import { Route, Routes } from "react-router";
import { Product } from "./Product/Product";
import { ProductDetails } from "./Product/ProductDetails";
export const AllRoutes = () => {
  return (
    <Box width={"100%"}>
      <Topnavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Box>
  );
};
