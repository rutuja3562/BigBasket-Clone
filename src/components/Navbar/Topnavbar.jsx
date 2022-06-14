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
} from "@chakra-ui/react";
import { PhoneIcon, SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import styles from "./navbar.module.css";
export const Topnavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box width={"75%"} margin="auto">
      <Box>
        <Box display={"flex"}>
          <Box width="20%">
            <img
              src="https://www.bbassets.com/static/staticContent/bb_logo.png"
              alt="logo"
            />
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
                    <Text>BigBasketeer</Text>
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
                    isInvalid
                    errorBorderColor="#84c225"
                    borderRadius="0"
                    borderWidth="0.025px"
                  />
                  <Button
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                    // _focus={{ boxShadow: "#84c225" }}
                    variant="outline"
                    focusBorderColor="#84c225"
                    isInvalid
                    errorBorderColor="#84c225"
                    borderRadius="0"
                    borderWidth="1px"
                    height={"1.6rem"}
                    bg="#84c225"
                    color="white"
                    padding={"2.5px"}
                    ml="-1px"
                  >
                    <SearchIcon />
                  </Button>
                </Flex>
                <Flex width="20%" justifyContent={"space-between"}>
                  <Box ml={"20px"}>
                    <BsBasket3 size={"25px"} />
                  </Box>
                  <Box>
                    <Text>My Basket</Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box>
          <Flex mt={"1rem"} alignItems={"center"}>
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
                      width={"870px"}
                      fontSize="14px"
                      fontWeight={"300"}
                      borderRadius={0}
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                    >
                      <Flex>
                        <div className={styles.borderright}>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Fruits & Vegetables
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Foodgrains, Oil & Masala
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Bakery, Cakes & Dairy
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Beverages
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Snakes & Branded Foods
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Beauty & Hygiene
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Cleaning & Household
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Kitchen, Garden & Pets
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Eggs, Meat & Fish
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Gourmet & World Food
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
                            Baby Cary
                          </MenuItem>
                          <MenuItem borderBottom={"1px solid grey"}>
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
                        <div>
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