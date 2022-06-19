import React, { useEffect } from "react";
import { Checkbox, CheckboxGroup, VStack, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../../Redux/product/action";

export const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandValue, setBrandValue] = useState(
    searchParams.getAll("brand") || []
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
  const [show, setShow] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch(" http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setShow(data));
  };
  // console.log(">>>", orderValue);

  const HandleSelect = (e) => {
    console.log(e.target.value);
    setOrderValue(e.target.value);
    if (e.target.value === "low") {
      const data = [...show].sort((a, b) => {
        return a.price - b.price;
      });
      console.log(data);
      setShow(data);
    }
    if (e.target.value === "high") {
      const data = [...show].sort((a, b) => {
        return b.price - a.price;
      });
      console.log("dta", data);
      setShow(data);
    }
    // setOrderValue(e.target.value);
  };

  const brandValueHandler = (value) => {
    setBrandValue(value);
    // console.log(value);
  };
  const packSizeHandler = (value) => {
    // console.log(value);
    setPackSize(value);
  };
  const priceHandler = (value) => {
    // console.log(value);
    setPriceValue(value);
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
    // const params = {
    //   brand: searchParams.getAll("brand"),
    //   quantity: searchParams.getAll("quantity"),
    //   price: searchParams.getAll("price"),
    //   _sort: "price",
    //   _order: searchParams.get("_order"),
    // };
    dispatch(fetchData());
  }, [setSearchParams, brandValue, priceValue, orderValue, packSize]);
  return (
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
  );
};
