import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Heading,
  Link,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
  TabPanel,
  TabPanels,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { PhoneIcon, SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineUser,AiOutlineClose } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import styles from "./navbar.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartLength } from "../CartLength";
import { LogedIn } from "../Login/LogedIn";
import { useState } from "react";
import axios from "axios";
import { ProductComponent } from "../Product/ProductComponent";
import SignIn from "../Login/SignIn";
import Sign from "../Signup/Sign";

// import {Link as RouterLink} from "react-router-dom"

export const Topnavbar = () => {
  const [inputvalue, setInputValue] = useState("");
  const [loggedIn,setLoggedIn]=useState(false);
  const [show,setShow]=useState(false)
  const navigate = useNavigate();
  const cart = useSelector((state) => state.products.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSearch = () => {
    if (inputvalue !== "") {
      axios
        .get(`https://web-production-ae8c.up.railway.app/vegetables?search=${inputvalue}`)
        .then((res) => {
          console.log(res.data.vegetables[0]._id);
          // getSearchProduct(res.data.vegetables[0].)
          // <ProductComponent />;
          navigate(`/products/${res.data.vegetables[0]._id}`);
          // navigate("/payment");
          // <Link to={`/products/${res.data.vegetables[0]._id}`}></Link>
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Box width={"75%"} margin="auto">
      <Box>
        <Box
          display={"flex"}
          borderWidth="1px"
          overflow="hidden"
          paddingBottom={"3px"}
        >
          <Box width="20%">
            <Link as={RouterLink} to="/">
              <img
                src="https://www.bbassets.com/static/staticContent/bb_logo.png"
                alt="logo"
              />
            </Link>
          </Box>
          <Box width="78%" ml={"2rem"}>
            <Box width="100%" float={"right"}>
              <Flex
                float={"right"}
                width="100%"
                padding={"0.25rem 0 0 0"}
                fontWeight="400"
                fontSize="14px"
                alignItems={"center"}
                justifyContent={"flex-end"}
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
                 
                     <Box>
                     <Box onClick={()=>setShow(true)}>Signup</Box>
 
                     <Modal isOpen={show } onClose={onClose}>
                     <ModalOverlay />
                     <ModalContent className="model">
                     <Box onClick={()=>setShow(false)} display="flex" margin={2} padding={"5px"} flexFlow={"row-reverse"} ><AiOutlineClose size={30} /></Box>
                        {show ?<div className="block">
                        <Box w="100%" bg="white" p="4" borderRadius={"lg"} borderWidth="1px">
                        <Tabs variant="soft-rounded"  colorScheme={"green"}>
                          <TabList mb="1em">
                            <Tab w="50%">Login</Tab>
                            <Tab w="50%">Sign Up</Tab>
                          </TabList>
                          <TabPanels>
                            <TabPanel>
                              <SignIn  setshow={setShow}/>
                            </TabPanel>
                            <TabPanel>
                              <Sign/>
                            </TabPanel>
                          </TabPanels>
                        </Tabs>
                      </Box>
                      </div> :<div className="none"></div>}
                      </ModalContent>
                     </Modal>
                      </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box mt={"2rem"}>
              <Flex width={"100%"} justifyContent={"space-between"}>
                <Flex width={"65%"} alignItems="center">
                  <Input
                    height={"1.5rem"}
                    type="text"
                    colorScheme="white"
                    variant="outline"
                    placeholder="Search for Products..."
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                    _focus={{ boxShadow: "#84c225" }}
                    focusBorderColor="#84c225"
                    // isInvalid
                    errorBorderColor="#84c225"
                    borderRadius="0"
                    borderWidth="0.025px"
                    value={inputvalue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                    // _focus={{ boxShadow: "#84c225" }}
                    variant="outline"
                    focusBorderColor="#84c225"
                    // isInvalid
                    errorBorderColor="#84c225"
                    borderRadius="0"
                    borderWidth="1px"
                    height={"1.6rem"}
                    bg="#84c225"
                    color="white"
                    padding={"2.5px"}
                    ml="-1px"
                    onClick={handleSearch}
                  >
                    <SearchIcon />
                  </Button>
                </Flex>
                <Flex
                  width="16%"
                  // justifyContent={"space-between"}
                  bg={" #e8e8e8"}
                  height={"60px"}
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  <Flex
                    ml={"20px"}
                    mr="1rem"
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <BsBasket3 size={"20px"} />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                  >
                    <Text fontSize={"12px"}>My Basket</Text>
                    <Flex>
                      <CartLength /> <Text ml={2}>Items</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box borderWidth="1px" overflow="hidden">
          <Flex alignItems={"center"}>
            <Box>
              <Menu border={"1px solid green"} width={"100%"} isOpen={isOpen}>
                <Box>
                  <MenuButton
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                    as={Button}
                    transition="all 0.2s"
                    borderRadius="0"
                    variant="ghost"
                    borderWidth="1px"
                    borderColor="white"
                    focusBorderColor="white"
                    colorScheme=""
                    bg="#84c225"
                    _hover={{ bg: "#84c225" }}
                    _expanded={{ bg: "#84c225" }}
                    _focus={{ boxShadow: "none" }}
                    rightIcon={<ChevronDownIcon />}
                    fontSize="12px"
                    fontWeight={500}
                  >
                    SHOP BY CATEGORY
                  </MenuButton>
                  <Flex>
                    <MenuList
                      bg={"white"}
                      width={"1080px"}
                      fontSize="14px"
                      fontWeight={"300"}
                      borderRadius={0}
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                    >
                      <Flex>
                        <div className={styles.borderright}>
                          <Link as={RouterLink} to="/product">
                            <MenuItem borderBottom={"1px solid #e8e8e8"}>
                              Fruits & Vegetables
                            </MenuItem>
                          </Link>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Foodgrains, Oil & Masala
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Bakery, Cakes & Dairy
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Beverages
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Snakes & Branded Foods
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Beauty & Hygiene
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Cleaning & Household
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Kitchen, Garden & Pets
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Eggs, Meat & Fish
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Gourmet & World Food
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            Baby Cary
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid #e8e8e8"}>
                            View All
                          </MenuItem>
                        </div>
                        <div className={styles.bg_grey}>
                          <MenuItem>Fresh Vegitables</MenuItem>
                          <MenuItem>Herbs & Seasonings</MenuItem>
                          <MenuItem>Fresh Fruits</MenuItem>
                          <MenuItem>Organic Fruits & Vegetables</MenuItem>
                          <MenuItem>Cuts & Sprouts</MenuItem>
                          <MenuItem>Exotic Fruits & Veggies</MenuItem>
                          <MenuItem>Flower Bouquets, Bunches</MenuItem>
                        </div>
                        <div className={styles.borderright}>
                          <MenuItem>Potato, Onion & Tomato</MenuItem>
                          <MenuItem>Cucumber & Capsicum</MenuItem>
                          <MenuItem>Leafy Vegetables</MenuItem>
                          <MenuItem>Root Vegetables</MenuItem>
                          <MenuItem>Beans, Brinjals & Okra</MenuItem>
                          <MenuItem>Cabbage & Cauliflower</MenuItem>
                          <MenuItem>Gourd, Pumpkin, Drumstic</MenuItem>
                          <MenuItem>Specialty</MenuItem>
                        </div>
                        <div className={styles.fs12}>
                          <MenuItem
                            fontSize={"16"}
                            fontWeight={300}
                            color={"#84c225"}
                          >
                            Popular Searches
                          </MenuItem>
                          <MenuItem>Vegetables</MenuItem>
                          <MenuItem>Tomato</MenuItem>
                          <MenuItem>Onion</MenuItem>
                          <MenuItem>Potato</MenuItem>
                          <MenuItem>Vegitable</MenuItem>
                          <MenuItem>Carrat</MenuItem>
                        </div>
                      </Flex>
                    </MenuList>
                  </Flex>
                </Box>
              </Menu>
            </Box>
            <Box>
              <button className={styles.outlinebutton}>OFFERS</button>
            </Box>
            <Box>
              <button className={styles.outlinebutton}>BB SPLECIALITY</button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
