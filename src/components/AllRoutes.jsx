import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar/Navbar";
import { Topnavbar } from "./Navbar/Topnavbar";
import { Home } from "./Home/Home";
export const AllRoutes = () => {
  return (
    <Box width={"100%"}>
      <Topnavbar />
      <Home/>
    </Box>
  );
};
