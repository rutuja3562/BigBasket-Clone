import { Box, Text, Stack, Image, Flex } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { data } from "./img";
import "./home.css";
export const BestSeller = () => {
  return (
    <Stack width={"100%"}>
      <Flex flexWrap={"wrap"}>
        {data.map((e) => {
          return (
            <Box
            key={e.id}
              className="transition"
              role={"group"}
              p={6}
              width="20%"
              boxShadow={"md"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"contain"}
                  src={e.imgUrl}
                />
              </Box>
              <Stack textAlign={"left"}>
                <Text color={"gray.500"} fontSize={"sm"}>
                  {e.brand}
                </Text>
                <Text color={"black"} fontSize={"12px"}>
                  {e.title}
                </Text>
                <Stack direction={"row"} textAlign={"center"}>
                  <Text color={"black"} fontSize={"sm"}>
                    Rs {e.price}
                  </Text>
                  <Text
                    textDecoration={"line-through"}
                    fontSize={"sm"}
                    color={"black"}
                  >
                    <span className="linethrough">Mrp</span> {e.strikedPrice}
                  </Text>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <MdLocalShipping size={28} />
                  <Text fontSize={"sm"} color={"black"}>
                    {Math.floor(Math.random() * 7) + 1} business days delivery
                  </Text>
                </Stack>
                ;
              </Stack>
            </Box>
          );
        })}
      </Flex>
    </Stack>
  );
};
