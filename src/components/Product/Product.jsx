import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ProductSlider } from "./Slider";
import { FilterComponent } from "./FilterComponent";
import { ProductComponent } from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/product/action";
import { useSearchParams } from "react-router-dom";
export const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const product = useSelector((state) => state.products.product);
  // const [orderValue, setOrderValue] = useState("asc");
  // console.log("Product...", product);


  const dispatch = useDispatch();
  useEffect(() => {
    if (product?.length === 0) {
      let params = {
        brand: searchParams.getAll("brand"),
        quantity: searchParams.getAll("quantity"),
        _sort: searchParams.getAll("price"),
        _order: searchParams.getAll("_order"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, product?.length, searchParams]);
  return (
    <Box width={"75%"} margin="auto" mt="1rem">
      <ProductSlider />
      <Box mt={"20px"} mb={"20px"}>
        <img
          src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"
          alt="..."
        />
      </Box>
      <Box border={"1px"}>
        <Flex>
          <Box width={"15%"} textAlign={"left"} m={"1rem"} fontWeight={300}>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              borderBottom={"1px solid #e8e8e8"}
            >
              Category
            </Text>
            <Text color={" #84c225"} fontSize={"12px"} fontWeight={500}>
              Fruites & Vegetables
            </Text>
            <Flex>
              <FilterComponent />
            </Flex>
          </Box>
          <Box width="85%" borderLeft={"1px solid #e8e8e8"}>
            <Stack
              width={"97%"}
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                textAlign={"left"}
                m={"1rem"}
                fontSize={"20px"}
                fontWeight={400}
              >
                Fruits & Vegetables ({product.length})
              </Text>
             
            </Stack>
            <Flex flexWrap={"wrap"} borderTop={"1px solid #e8e8e8"}>
              {product.map((e) => {
                return <ProductComponent key={e._id} props={e} />;
              })}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
