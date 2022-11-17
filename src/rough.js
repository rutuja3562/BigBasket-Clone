{
  /*}
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
                onClick={() => {
                  // if (cvv == "" || year == "" || card == "") {
                  //   alert("Enter all Fields");
                  // } else {
                  //   alert("Payment is Successfull!");
                  //   navigate("/");
                  // }
                  <Razor/>
                }}
              >
                Place Order & Pay
              </Button>
              */
}

          {
            /*
          <Box
            width={"70%"}
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
            <Flex
              padding={"1rem"}
              textAlign="left"
              border={"1px solid #e8e8e8"}
            >
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
                  <FormLabel
                    fontSize={"13px"}
                    fontWeight={400}
                    htmlFor="number"
                  >
                    Card Number
                  </FormLabel>
                  <Input
                    value={card}
                    id="number"
                    type="number"
                    fontSize={"12px"}
                    fontWeight={300}
                    onChange={(e) => {
                      setCard(e.target.value);
                    }}
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
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage>Enter Card Number</FormErrorMessage>
                  )}
                  <Flex width="100%" justifyContent={"space-between"}>
                    <Box width="49%">
                      <FormLabel
                        fontSize={"13px"}
                        fontWeight={400}
                        htmlFor="card"
                      >
                        Expire Year
                      </FormLabel>
                      <Input
                        type="number"
                        fontSize={"12px"}
                        fontWeight={300}
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
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
                        <FormHelperText></FormHelperText>
                      ) : (
                        <FormErrorMessage></FormErrorMessage>
                      )}
                    </Box>
                    <Box width="49%">
                      <Box>
                        <FormLabel
                          fontSize={"13px"}
                          fontWeight={400}
                          htmlFor="cvv"
                        >
                          cvv
                        </FormLabel>
                        <Input
                          type="number"
                          fontSize={"12px"}
                          fontWeight={300}
                          onChange={(e) => {
                            setCVV(e.target.value);
                          }}
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
                          <FormHelperText></FormHelperText>
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
                      onClick={() => {
                        if (cvv == "" || year == "" || card == "") {
                          alert("Enter all Fields");
                        } else {
                          alert("Payment is Successfull!");
                          navigate("/");
                        }
                      }}
                    >
                      Place Order & Pay
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Flex>
          </Box>
            */
          }


          // last updated product page//
          // import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Stack,
//   Checkbox,
//   CheckboxGroup,
//   VStack,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { ProductSlider } from "./Slider";
// import { FilterComponent } from "./FilterComponent";
// import { ProductComponent } from "./ProductComponent";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../Redux/product/action";
// import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router";
// import { Topnavbar } from "../Navbar/Topnavbar";
// export const Product = () => {
//   // const product = useSelector((state) => state.products.product);
//   // console.log(product)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // if (products?.length === 0) {
//       // dispatch(fetchData());
//     // }
//   }, []);

//   // ***product component****//
//   const navigate = useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [brandValue, setBrandValue] = useState(
//     searchParams.getAll("brand") || []
//   );
//   const [packSize, setPackSize] = useState(
//     searchParams.getAll("quantity") || []
//   );
//   const [priceValue, setPriceValue] = useState(
//     searchParams.getAll("price") || []
//   );
//   const [orderValue, setOrderValue] = useState(
//     searchParams.getAll("_order") || []
//   );
//   const [products, setProducts] = useState([]);
//   // const dispatch = useDispatch();

//   useEffect(() => {
//     getdata();
//   }, []);

//   const getdata = async () => {
//     await fetch("https://rbigbasket.herokuapp.com/vegetables")
//       .then((data) => data.json())
//       .then((data) => {
//         setProducts(data.vegetables);
//       })
//       .catch((err) => {
//         console.log("e", err);
//       });
//   };
// console.log("products......",products)
//   //*** Sort by price***//

//   const HandleSelect = (e) => {
//     setOrderValue(e.target.value);
//     if (e.target.value === "low") {
//       const data = [...products].sort((a, b) => {
//         return a.price - b.price;
//       });
//       // console.log(data);
//       setProducts(data);
//     }
//     if (e.target.value === "high") {
//       const data = [...products].sort((a, b) => {
//         return b.price - a.price;
//       });
//       // console.log("dta", data);
//       setProducts(data);
//     }
//   };

//   //*** Filter by Brand***//

//   const brandValueHandler = async (value) => {
//     // const data = await fetch(
//     //   "https://rbigbasket.herokuapp.com/vegetables"
//     // ).then((d) => d.json());
//     await fetch("https://rbigbasket.herokuapp.com/vegetables")
//     .then((data) => data.json())
//     .then((data) => {
//       setProducts(data.vegetables);
//     })
//     .catch((err) => {
//       console.log("e", err);
//     });
//     setBrandValue(value);
//     console.log("data")
//     if (value == "Fresho") {
//       const filteredArr = products.filter((a) => {
//         if (a.brand == "Fresho") {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == "Organic") {
//       const filteredArr = products.filter((a) => {
//         if (a.brand == "Organic") {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == "Hoovu Fresh") {
//       const filteredArr = products.filter((a) => {
//         if (a.brand == "Hoovu Fresh") {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == "Brotos") {
//       const filteredArr = products.filter((a) => {
//         if (a.brand == "Brotos") {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else {
//       setProducts(products);
//     }
//   };

//   //*** Filter by PackSizeHandler***//

//   const packSizeHandler = async (value) => {
//     setPackSize(value);
//     const data = await fetch(
//       "https://rbigbasket.herokuapp.com/vegetables"
//     ).then((d) => d.json());
//     // setBrandValue(value);
//     if (value == "100") {
//       const filteredArr = data.filter((a) => {
 
//         if (a.quantity == "100") {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     }
//     if (value == 250) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 250) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     }
//     if (value == 500) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 500) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     }
//     if (value == 1) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 1) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
    
//     } else if (value == 2) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 2) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == 1) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 1) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == 2) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 2) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == 2) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 2) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == 40) {
//       const filteredArr = data.filter((a) => {
//         if (a.quantity == 40) {
//           return a;
//         }
//       });

//       setProducts(filteredArr);
//     } else {
//       setProducts(data);
//     }
//   };

//   //*** Filter by Price***//

//   const priceHandler = async (value) => {
//     setPriceValue(value);
//     const data = await fetch(
//       "https://rbigbasket.herokuapp.com/vegetables"
//     ).then((d) => d.json());

//     if (value == "22") {
//       const filteredArr = data.filter((a) => {
//         if (a.price >= 0 && a.price <= 50) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == "51-100") {
//       const filteredArr = data.filter((a) => {
//         if (a.price > 51 && a.price <= 100) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else if (value == "101-150") {
//       const filteredArr = data.filter((a) => {
//         if (a.price > 101 && a.price <= 150) {
//           return a;
//         }
//       });
//       setProducts(filteredArr);
//     } else {
//       setProducts(data);
//     }
//   };

//   useEffect(() => {
//     setSearchParams(
//       {
//         brand: brandValue,
//         quantity: packSize,
//         price: priceValue,
//         _order: orderValue,
//       },
//       { replace: true }
//     );
//     const params = {
//       brand: searchParams.getAll("brand"),
//       quantity: searchParams.getAll("quantity"),
//       price: searchParams.getAll("price"),
//       _sort: "price",
//       _order: searchParams.get("_order"),
//     };
//     dispatch(fetchData(params));
//   }, [
//     setSearchParams,
//     searchParams,
//     brandValue,
//     priceValue,
//     orderValue,
//     packSize,
//   ]);

//   return (
//     <Box width={"100%"}>
//       <Topnavbar />
//       <Box width={"75%"} margin="auto" mt="1rem">
//         <ProductSlider />
//         <Box mt={"20px"} mb={"20px"}>
//           <img
//             src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"
//             alt="..."
//           />
//         </Box>
//         <Box border={"1px solid #e8e8e8"}>
//           <Flex>
//             <Box width={"15%"} textAlign={"left"} m={"1rem"} fontWeight={300}>
//               <Text
//                 fontSize={"14px"}
//                 fontWeight={500}
//                 borderBottom={"1px solid #e8e8e8"}
//               >
//                 Category
//               </Text>
//               <Text color={" #84c225"} fontSize={"12px"} fontWeight={500}>
//                 Fruites & Vegetables
//               </Text>
//               <Flex>
//                 {/*  <FilterComponent />*/}
//                 <Box width={"100%"} mt={"1.5rem"}>
//                   <Box mb="1rem" borderBottom="1px solid #e8e8e8" pb={"1rem"}>
//                     <Box mb={"2rem"}>
//                       <select id="cars1" onChange={HandleSelect}>
//                         <option>price</option>
//                         <option value="low">Low To High</option>
//                         <option value="high">High To Low</option>
//                       </select>
//                     </Box>
//                     <CheckboxGroup
//                       colorScheme="green"
//                       defaultValue={brandValue}
//                       onChange={brandValueHandler}
//                     >
//                       <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
//                         Brand
//                       </Text>
//                       <VStack
//                         direction={["column", "row"]}
//                         alignItems={"baseline"}
//                         fontSize={"12px"}
//                         fontWeight={"375"}
//                       >
//                         <Checkbox value="Organic">Organic</Checkbox>
//                         <Checkbox value="Hoovu Fresh">Hoovu Fresh</Checkbox>
//                         <Checkbox value="Brotos">Brotos</Checkbox>
//                         <Checkbox value="Fresho">Fresho</Checkbox>
//                       </VStack>
//                     </CheckboxGroup>
//                   </Box>
//                   <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
//                     <CheckboxGroup
//                       colorScheme="green"
//                       defaultValue={packSize}
//                       onChange={packSizeHandler}
//                     >
//                       <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
//                         Pack Size
//                       </Text>
//                       <VStack
//                         direction={["column", "row"]}
//                         alignItems={"baseline"}
//                         fontSize={"12px"}
//                         fontWeight={"375"}
//                       >
//                         <Checkbox value="1">1 kg</Checkbox>
//                         <Checkbox value="2">2 pcs</Checkbox>
//                         <Checkbox value="40">40cm</Checkbox>
//                         <Checkbox value="100">100 g</Checkbox>
//                         <Checkbox value="250">250 g</Checkbox>
//                       </VStack>
//                     </CheckboxGroup>
//                   </Box>
//                   <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
//                     <CheckboxGroup
//                       colorScheme="green"
//                       defaultValue={priceValue}
//                       onChange={priceHandler}
//                     >
//                       <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
//                         Price
//                       </Text>
//                       <VStack
//                         direction={["column", "row"]}
//                         alignItems={"baseline"}
//                         fontSize={"12px"}
//                         fontWeight={"375"}
//                       >
//                         <Checkbox value="0-50">0-50</Checkbox>
//                         <Checkbox value="51-100">51-100</Checkbox>
//                         <Checkbox value="101-150">101-150</Checkbox>
//                       </VStack>
//                     </CheckboxGroup>
//                   </Box>
//                 </Box>
//               </Flex>
//             </Box>
//             <Box width="85%" borderLeft={"1px solid #e8e8e8"}>
//               <Stack
//                 width={"97%"}
//                 direction="row"
//                 alignItems={"center"}
//                 justifyContent={"space-between"}
//               >
//                 <Text
//                   textAlign={"left"}
//                   m={"1rem"}
//                   fontSize={"20px"}
//                   fontWeight={400}
//                 >
//                   Fruits & Vegetables ({products.length})
//                 </Text>
//               </Stack>
//               <Flex flexWrap={"wrap"} borderTop={"1px solid #e8e8e8"}>
//                 {products.map((e) => {
//                   return <ProductComponent key={e._id} props={e} />;
//                 })}
//               </Flex>
//             </Box>
//           </Flex>
//         </Box>
//       </Box>
//     </Box>
//   );
// };