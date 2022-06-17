import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  HStack,
  Link,
  ListItem,
  UnorderedList,
  textDecoration,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleProduct } from "../../Redux/product/action";
// import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
// import { Icon, createIcon } from "@chakra-ui/react";
// import { CircleIcon, StarIcon } from "@chakra-ui/icons";
import { MdLocalShipping } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
export const ProductDetails = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.products.currentProduct);
  console.log("curr", currentProduct);
  const { id } = useParams();
  console.log("LL", id);
  useEffect(() => {
    dispatch(getSingleProduct(id));
    // console.log("ID",id)
  }, [dispatch, id]);

  //  const handleAddproduct = () => {
  //    // console.log("***current", currentProduct);
  //    currentProduct && dispatch(addCart(currentProduct));
  //  };
  return (
    <Box width={"75%"} margin={"auto"} border="1px solid #e8e8e8">
      <Flex
        justifyContent={"space-between"}
        // columns={{ base: 1, lg: 2 }}
        // spacing={{ base: 8, md: 10 }}
        // py={{ base: 18, md: 24 }}
      >
        <Box
          borderRight={"1px solid #e8e8e8"}
          width="25%"
          textAlign={"left"}
          p="2rem 0 1rem 1rem"
        >
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            mb={"1rem"}
            borderBottom={"1px solid #e8e8e8"}
          >
            Category
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={"500"}
            mb={"0.5rem"}
            // borderBottom={"1px solid #e8e8e8"}
          >
            Fruits & Vegetables
          </Text>
          <Text fontSize={"12px"} fontWeight={"500"} ml={"1rem"} mb="0.5rem">
            Fresh Vegetables
          </Text>
          <UnorderedList
            listStyleType={"none"}
            fontSize={"12px"}
            fontWeight={"380"}
            ml={"1.5rem"}
            // _hover={{ bg: "white" }}
            mb={"1rem"}
          >
            <ListItem _hover={{ color: "#84c225" }} mb={"0.25rem"}>
              Beans,Bringles & Okra
            </ListItem>
            <ListItem _hover={{ color: "#84c225" }} mb={"0.25rem"}>
              Cabbage & Cauliflower
            </ListItem>
            <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
              Cucumber & Capsicum
            </ListItem>
            <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
              Gourd, Pumpkin, DrumStick
            </ListItem>
            <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
              Leafy Vegetables
            </ListItem>
            <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
              Potato, Onion & Tomato
            </ListItem>
            <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
              Root Vegetables
            </ListItem>
            <ListItem mb={"0.25rem"} _hover={{ color: "#84c225" }}>
              Specialty
            </ListItem>
          </UnorderedList>
          <Text
            fontSize={"14px"}
            fontWeight={"500"}
            mb={"1rem"}
            borderBottom={"1px solid #e8e8e8"}
          >
            Brands
          </Text>
          <Text fontSize={"12px"} fontWeight={"380"} mb={"0.25rem"} ml={"1rem"}>
            Fresho
          </Text>
          <Text fontSize={"12px"} fontWeight={"380"} mb={"0.25rem"} ml={"1rem"}>
            Fresho Potato, Onion & Tomato
          </Text>
        </Box>
        <Box width="35%">
          <Flex justifyContent={"center"}>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={currentProduct.imgUrl}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              // border="1px solid #e8e8e8"
              mt={"18%"}
              // h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
        </Box>
        <Box border={"1px"} width="35%">
          <Stack
            spacing={{ base: 6, md: 10 }}
            border="1px solid red"
            textAlign={"left"}
          >
            <Box as={"header"}>
              <Text
                mt={"20%"}
                lineHeight={1.1}
                fontWeight={400}
                fontSize={"16px"}
                pb="0.25rem"
              >
                {currentProduct.brand}
              </Text>
              <Text
                lineHeight={1.1}
                fontWeight={400}
                fontSize={"16px"}
                pb="0.25rem"
              >
                {currentProduct.brand} - {currentProduct.title}
              </Text>
              <Text
                // color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={400}
                fontSize={"16px"}
              >
                MRP : {""}{" "}
                <span className="linethrough">
                  Rs{0.5 * currentProduct.price}
                </span>
              </Text>
              <Text fontWeight={400} fontSize={"20px"}>
                Price : ₹ {currentProduct.price}
              </Text>
            </Box>
            <Box  margin={"auto"} border="1px">
              <Button>1</Button>
              <Link as={RouterLink} to={"/cart"}>
                <Button
                  rounded={"none"}
                  w={"50%"}
                  margin="auto"
                  py={"0"}
                  bg={useColorModeValue("gray.900", "gray.50")}
                  color={useColorModeValue("white", "gray.900")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  // onClick={handleAddproduct}
                >
                  Add to cart
                </Button>

                </Link>
                <Button>Save</Button>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
