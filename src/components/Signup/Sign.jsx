import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useState } from "react";
  const Sign = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const handleClick = () => setShow(!show);
    // const navigate=useNavigate()
    const toast = useToast();
  
    const submitHandler = async () => {
      if (email === "" || password === "") {
        toast({
          title: "Please fill all Field.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        return;
      }
  
      try {
        const config = {
          headers: { "Content-type": "application/json" },
        };
        await axios.post("https://web-production-ae8c.up.railway.app/register",
          // "http://localhost:7005/register",
          { email, password },
          config
        );
        console.log("success");
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } catch (e) {
        console.log(e.message);
        toast({
          title: "Email Already Exist",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    return (
      <VStack spacing={"5px"}>
        <FormControl isRequired>
          <FormLabel> Email </FormLabel>
          <Input
          type='email'
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
  
        <FormControl isRequired id="password">
          <FormLabel>password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              value={password}
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                // colorScheme={"green"}
                bg="#84c225"
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
  
        <Button
          w="100%"
          style={{ marginTop: "15" }}
        //   colorScheme={"green"}
        bg="#84c225"
          onClick={submitHandler}
          isLoading={loading}
        >
          Sign Up
        </Button>
      </VStack>
    );
  };
  
  export default Sign;
  