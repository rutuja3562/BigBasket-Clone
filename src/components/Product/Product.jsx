import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Checkbox,
  CheckboxGroup,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ProductSlider } from "./Slider";
import { FilterComponent } from "./FilterComponent";
import { ProductComponent } from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/product/action";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";

export const Product = () => {
  // ***product component****//
// const dispatch = useDispatch();
  // const [searchParams, setSearchParams] = useSearchParams();
  const product = useSelector((state) => state);
  // console.log(">>>",product)
  const dispatch = useDispatch();
  useEffect(() => {
    if (product?.length === 0) {
  // let params = {
  //   brand: searchParams.getAll("brand"),
  //   quantity: searchParams.getAll("quantity"),
  //   _sort: searchParams.getAll("price"),
  //   _order: searchParams.getAll("_order"),
  //     // };
      dispatch(fetchData());
    }
  },[dispatch, product?.length]);

  // ***product component****//
  const navigate=useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandValue, setBrandValue] = useState(
    searchParams.getAll("brand")||[]
  );
  const [packSize, setPackSize] = useState(
    searchParams.getAll("quantity") || []
  );
  const [priceValue, setPriceValue] = useState(
    searchParams.getAll("price") || []
  );
  const [orderValue, setOrderValue] = useState(
    searchParams.getAll("_order") || []
  );
  const [products, setProducts] = useState([]);
  // const dispatch = useDispatch();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  //*** Sort by price***//

  const HandleSelect = (e) => {
    setOrderValue(e.target.value);
    if (e.target.value === "low") {
      const data = [...products].sort((a, b) => {
        return a.price - b.price;
      });
      // console.log(data);
      setProducts(data);
    }
    if (e.target.value === "high") {
      const data = [...products].sort((a, b) => {
        return b.price - a.price;
      });
      // console.log("dta", data);
      setProducts(data);
    }
  };

  //*** Filter by Brand***//

  const brandValueHandler = async (value) => {
    const data = await fetch("http://localhost:8080/products").then((d) =>
      d.json()
    );
    setBrandValue(value);
    if (value == "Fresho" ) {
      const filteredArr = data.filter((a) => {
        if (a.brand == "Fresho") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "Organic") {
      const filteredArr = data.filter((a) => {
        if (a.brand == "Organic") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "Hoovu Fresh") {
      const filteredArr = data.filter((a) => {
        if (a.brand == "Hoovu Fresh") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "Brotos") {
      const filteredArr = data.filter((a) => {
        if (a.brand == "Brotos") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else {
      setProducts(data);
    }
  };

  //*** Filter by PackSizeHandler***//

  const packSizeHandler = async (value) => {
    setPackSize(value);
    // const brandValueHandler = async (value) => {
    const data = await fetch("http://localhost:8080/products").then((d) =>
      d.json()
    );
    // setBrandValue(value);
    if (value == "100 g") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "100 g") {
          return a;
        }
      });
      setProducts(filteredArr);
    }
    if (value == "250 g") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "250 g") {
          return a;
        }
      });
      setProducts(filteredArr);
    }
    if (value == "500 g") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "500 g") {
          return a;
        }
      });
      setProducts(filteredArr);
    }
    if (value == "1 kg") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "1 kg") {
          return a;
        }
      });
      setProducts(filteredArr);
      // }
    } else if (value == "2 kg") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "2 kg") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "1 pc") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "1 pc") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "2 pcs") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "2 pcs") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "2 items") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "2 items") {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "40 cm") {
      const filteredArr = data.filter((a) => {
        if (a.quantity == "40 cm") {
          return a;
        }
      });

      setProducts(filteredArr);
    } else {
      setProducts(data);
    }
  };

  //*** Filter by Price***//

  const priceHandler = async (value) => {
    setPriceValue(value);
    const data = await fetch(" http://localhost:8080/products").then((d) =>
      d.json()
    );

    if (value == "0-50") {
      const filteredArr = data.filter((a) => {
        if (a.price >= 0 && a.price <= 50) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "51-100") {
      const filteredArr = data.filter((a) => {
        if (a.price > 51 && a.price <= 100) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (value == "101-150") {
      const filteredArr = data.filter((a) => {
        if (a.price > 101 && a.price <= 150) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    setSearchParams(
      {
        brand: brandValue,
        quantity: packSize,
        price: priceValue,
        _order: orderValue,
      },
      { replace: true }
    );
    const params = {
      brand: searchParams.getAll("brand"),
      quantity: searchParams.getAll("quantity"),
      price: searchParams.getAll("price"),
      _sort: "price",
      _order: searchParams.get("_order"),
    };
    dispatch(fetchData(params));
  }, [
    setSearchParams,
    searchParams,
    brandValue,
    priceValue,
    orderValue,
    packSize,
  ]);
  //   searchParams,

  // filtercomponent

  //filter component
  return (
    <Box width={"75%"} margin="auto" mt="1rem">
      <ProductSlider />
      <Box mt={"20px"} mb={"20px"}>
        <img
          src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"
          alt="..."
        />
      </Box>
      <Box border={"1px solid #e8e8e8"}>
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
              {/*  <FilterComponent />*/}
              <Box width={"100%"} mt={"1.5rem"}>
                <Box mb="1rem" borderBottom="1px solid #e8e8e8" pb={"1rem"}>
                  <Box mb={"2rem"}>
                    <select id="cars1" onChange={HandleSelect}>
                      <option>price</option>
                      <option value="low">Low To High</option>
                      <option value="high">High To Low</option>
                    </select>
                  </Box>
                  <CheckboxGroup
                    colorScheme="green"
                    defaultValue={brandValue}
                    onChange={brandValueHandler}
                  >
                    <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                      Brand
                    </Text>
                    <VStack
                      direction={["column", "row"]}
                      alignItems={"baseline"}
                      fontSize={"12px"}
                      fontWeight={"375"}
                    >
                      <Checkbox value="Fresho">Fresho</Checkbox>
                      <Checkbox value="Organic">Organic</Checkbox>
                      <Checkbox value="Hoovu Fresh">Hoovu Fresh</Checkbox>
                      <Checkbox value="Brotos">Brotos</Checkbox>
                    </VStack>
                  </CheckboxGroup>
                </Box>
                <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
                  <CheckboxGroup
                    colorScheme="green"
                    defaultValue={packSize}
                    onChange={packSizeHandler}
                  >
                    <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                      Pack Size
                    </Text>
                    <VStack
                      direction={["column", "row"]}
                      alignItems={"baseline"}
                      fontSize={"12px"}
                      fontWeight={"375"}
                    >
                      <Checkbox value="100 g">100 g</Checkbox>
                      <Checkbox value="250 g">250 g</Checkbox>
                      <Checkbox value="1 kg">1 kg</Checkbox>
                      <Checkbox value="2 kg">2 kg</Checkbox>
                      <Checkbox value="1 pc"> 1 pc</Checkbox>
                      <Checkbox value="2 pcs">2 pcs</Checkbox>
                      <Checkbox value="40 cm">40cm</Checkbox>
                      <Checkbox value="2 items">2 items</Checkbox>
                    </VStack>
                  </CheckboxGroup>
                </Box>
                <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
                  <CheckboxGroup
                    colorScheme="green"
                    defaultValue={priceValue}
                    onChange={priceHandler}
                  >
                    <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                      Price
                    </Text>
                    <VStack
                      direction={["column", "row"]}
                      alignItems={"baseline"}
                      fontSize={"12px"}
                      fontWeight={"375"}
                    >
                      <Checkbox value="0-50">0-50</Checkbox>
                      <Checkbox value="51-100">51-100</Checkbox>
                      <Checkbox value="101-150">101-150</Checkbox>
                    </VStack>
                  </CheckboxGroup>
                </Box>
              </Box>
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
              {products.map((e) => {
      
                return (
                  <ProductComponent
                    key={e._id}
                    props={e}
                  
                  />
                );
              })}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
