import React from "react";
import Carousel from "./Carousel";
import "./home.css";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import {
  img1,img2,img3,img4,img5,img6,img10,img11,img12,img13,img19,img20,img21,img22,img23,img24,img25,
  img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40
  ,img41,img42,img43,img44,img45,img46,img47,img48

} from "./img";
import Corouseltwo from "./Corouseltwo";
import { BestSeller } from "./BestSeller";
import { Topnavbar } from "../Navbar/Topnavbar";
export const Home = () => {
  return (
    <Box  width="100%" margin={"auto"}>
    <Topnavbar/>
      <Box width={"100%"} margin={"auto"}>
        <Carousel />
      </Box>
      <Box width={"75%"} margin={"auto"} mb={"1rem"}>
        <Flex
          marginTop={"-50px"}
          padding={"10px 0 10px 0"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <img width="150px" height="60px" src={img1} alt="img1" />{" "}
          </Box>
          <Box>
            <img width="150px" height="60px" src={img2} alt="img2" />
          </Box>
          <Box>
            <img width="150px" height="60px" src={img3} alt="img2" />
          </Box>
          <Box>
            <img width="150px" height="60px" src={img4} alt="img2" />
          </Box>
          <Box>
            <img width="150px" height="60px" src={img5} alt="img2" />
          </Box>
          <Box>
            <img width="150px" height="60px" src={img6} alt="img2" />
          </Box>
        </Flex>
      </Box>
      <Corouseltwo />
      <Box width={"75%"} margin="auto" mt={"2rem"}>
        <Text fontSize={"24px"} mb={"2rem"}>
          Banks Offers
        </Text>
        <Flex justifyContent={"space-between"}>
          <img className="transition" src={img10} alt="img10" width={"23%"} />
          <img className="transition" src={img11} alt="img10" width={"23%"} />
          <img className="transition" src={img12} alt="img10" width={"23%"} />
          <img className="transition" src={img13} alt="img10" width={"23%"} />
        </Flex>
      </Box>
      <Box width={"75%"} margin="auto" mt={"3rem"} mb={"1rem"}>
        <Text fontSize={"24px"} mb={"2rem"}>
          Best Sellers
        </Text>
        <BestSeller />;
      </Box>
      <Box width={"75%"} margin="auto" mt={"0rem"}>
        <Text fontSize={"24px"} mb={"1rem"}>
          Most Popular
        </Text>
        <Flex justifyContent={"space-between"}>
          <img className="transition" src={img19} alt="img10" width={"23%"} />
          <img className="transition" src={img20} alt="img10" width={"23%"} />
          <img className="transition" src={img21} alt="img10" width={"23%"} />
          <img className="transition" src={img22} alt="img10" width={"23%"} />
        </Flex>
      </Box>
      <Box width={"75%"} margin="auto" mt={"2rem"}>
        <Text fontSize={"24px"} mb={"2rem"}>
          Top Offers
        </Text>
        <Flex justifyContent={"space-between"}>
          <img className="transition" src={img23} alt="img10" width={"23%"} />
          <img className="transition" src={img24} alt="img10" width={"23%"} />
          <img className="transition" src={img25} alt="img10" width={"23%"} />
          <img className="transition" src={img26} alt="img10" width={"23%"} />
        </Flex>
      </Box>
      <Box width={"75%"} margin="auto" mt={"2rem"}>
        <Text fontSize={"24px"} mb={"2rem"}>
          Fruits and Vegetables
        </Text>
        <Flex>
          <Box className="borderwidth" width={"100%"}>
            <img src={img27} alt="" width={"100%"} />
          </Box>
          <Box width={"100%"}>
            <Flex flexWrap={"wrap"} className="borderwidth">
              <img src={img28} alt="" width={"50%"} />
              <img src={img29} alt="" width={"50%"} />
              <img src={img30} alt="" width={"50%"} />
              <img src={img31} alt="" width={"50%"} />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box width={"75%"} margin="auto" mt={"1rem"}>
        <Text fontSize={"24px"} mb={"1rem"}>
          Your Daily Staples
        </Text>
        <Flex justifyContent={"space-between"} className="borderwidth">
          <img className="transition " src={img32} alt="img10" width={"16%"} />
          <img className="transition" src={img33} alt="img10" width={"16%"} />
          <img className="transition" src={img34} alt="img10" width={"16%"} />
          <img className="transition" src={img35} alt="img10" width={"16%"} />
          <img className="transition" src={img36} alt="img10" width={"16%"} />
          <img className="transition" src={img37} alt="img10" width={"16%"} />
        </Flex>
      </Box>
      <Box width={"75%"} margin="auto" mt={"2rem"}>
        <Text fontSize={"24px"} mb={"2rem"}>
          Beverages
        </Text>
        <Flex>
          <Box className="borderwidth" width={"100%"}>
            <img src={img38} alt="" width={"100%"} />
          </Box>
          <Box width={"100%"}>
            <Flex flexWrap={"wrap"} className="borderwidth">
              <img src={img39} alt="" width={"50%"} />
              <img src={img40} alt="" width={"50%"} />
              <img src={img41} alt="" width={"50%"} />
              <img src={img42} alt="" width={"50%"} />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box width={"75%"} margin="auto" mt={"1rem"}>
        <Text fontSize={"24px"} mb={"1rem"}>
          Brand Store
        </Text>
        <Flex justifyContent={"space-between"} className="borderwidth">
          <img className="transition" src={img43} alt="img10" width={"16%"} />
          <img className="transition" src={img44} alt="img10" width={"16%"} />
          <img className="transition" src={img45} alt="img10" width={"16%"} />
          <img className="transition" src={img46} alt="img10" width={"16%"} />
          <img className="transition" src={img47} alt="img10" width={"16%"} />
          <img className="transition" src={img48} alt="img10" width={"16%"} />
        </Flex>
      </Box>
      <Box
        textAlign={"left"}
        width={"75%"}
        margin="auto"
        mt={"2rem"}
        mb={"1rem"}
        border="1px"
        padding={"1rem"}
      >
        <Heading fontSize={"28px"} fontWeight={"400"} mt={"1rem"} mb={"0.5rem"}>
          bigbasket – online grocery store
        </Heading>
        <Box w={"100%"} fontSize={"14px"} fontWeight={"350"}>
          <Text textAlign={"left"}>
            Did you ever imagine that the freshest of fruits and vegetables, top
            quality pulses and food grains, dairy products and hundreds of
            branded items could be handpicked and delivered to your home, all
            atthe click of a button? India’s first comprehensive online
            megastore, bigbasket.com, brings a whopping 20000+ products with
            more than 1000 brands, to over 4 million happy customers. From
            household cleaning products to beauty and makeup, bigbasket has
            everything you need for your daily needs. bigbasket.com is
            convenience personified We’ve taken away all the stress associated
            with shopping for daily essentials, and you can now order all your
            household products and even buy groceries online without travelling
            long distances or standing in serpentine queues. Add to this the
            convenience of finding all your requirements at one single source,
            along with great savings, and you will realize that bigbasket-
            India’s largest online supermarket, has revolutionized the way India
            shops for groceries. Online grocery shopping has never been easier.
            Need things fresh? Whether it’s fruits and vegetables or dairy and
            meat, we have this covered as well! Get fresh eggs, meat, fish and
            more online at your convenience. Hassle-free Home Delivery options
          </Text>
          <Text mt={"1rem"} mb={"1rem"}>
            We deliver to 25 cities across India and maintain excellent delivery
            times, ensuring that all your products from groceries to snacks
            branded foods reach you in time.
          </Text>
          <Box ml={"3rem"}>
            <ul>
              <li>
                <Text>
                  Slotted Delivery: Pick the most convenient delivery slot to
                  have your grocery delivered. From early morning delivery for
                  early birds, to late-night delivery for people who work the
                  late shift, bigbasket caters to every schedule.
                </Text>
              </li>
              <li>
                <Text>
                  Express Delivery: This super useful service can be availed by
                  customers in cities like Bangalore, Mumbai, Pune, Chennai,
                  Kolkata, Hyderabad and Delhi-NCR in which we deliver your
                  orders to your doorstep in 90 Minutes.
                </Text>
              </li>
              <li>
                <Text>
                  BB Specialty stores: Missed out on buying that essential item
                  from your favorite neighborhood store for tonight’s party?
                  We’ll deliver it for you! From bakery, sweets and meat to
                  flowers and chocolates, we deliver your order in 90 minutes,
                  through a special arrangement with a nearby specialty store,
                  verified by us.
                </Text>
              </li>
            </ul>
          </Box>
        </Box>
        <Button variant={"outline"} mt={"1rem"}>
          Read more...
        </Button>
      </Box>
    </Box>
  );
};


