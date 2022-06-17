import { Box, Text, Stack, Image, Flex, Center, Button } from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useNavigate } from "react-router";
import "../Home/home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtocartaction } from "../../Redux/product/action";
export const ProductComponent = ({ props }) => {
  // console.log("props",props)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCart=(props)=>{
    console.log(props)
    dispatch(addtocartaction(props))
  }
  return (
    <Box
      width={"33%"}
      // border="1px solid blue"
    >
     
        <Box
          className="transition"
          role={"group"}
          p={6}
          // border="1px solid blue"
          boxShadow={"md"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          margin="1rem"
          // width="100%"
          // onClick={() => {
          //   console.log("id",`${props._id}`)
          //   // navigate(`/products/${props._id}`);
          //   // `products/${e.id}`;
          // }}
        >
         <Link to={`/products/${props.id}`}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            //   border="1px solid transparent"
          >

            <Image
              rounded={"lg"}
              objectFit={"cover"}
              // border="1px solid red"
              src={props.imgUrl}
            />
          </Flex>
          </Link>
          <Stack textAlign={"left"}>
            <Text color={"gray.500"} fontSize={"sm"}>
              {props.brand}
            </Text>
            <Text color={"black"} fontSize={"12px"}>
              {props.title}
            </Text>
            <Text color={"black"} fontSize={"13px"}>
              {props.quantity}-Rs{props.price}{" "}
            </Text>
            <Stack direction={"row"} textAlign={"center"}>
              <Text color={"black"} fontSize={"sm"}>
                Rs {props.price}
              </Text>
              <Text fontSize={"12px"} color={"black"}>
                MRP{" "}
                <span className="linethrough" textDecoration={"line-through"}>
                  Rs{0.5 * props.price}
                </span>
              </Text>
            </Stack>
            <Button variant={"outline"} p="0" onClick={()=>handleCart(props)}>Add to cart</Button>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping size={28} />
              <Text fontSize={"sm"} color={"black"}>
                It will take {Math.floor(Math.random() * 4) + 1} days to deliver
                your home
              </Text>
            </Stack>
          </Stack>
        </Box>
      
    </Box>
  );
};
