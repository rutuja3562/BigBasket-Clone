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
  import '../Navbar/navbar.css'
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  const SignIn = ({setshow}) => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
  
    const handleClick = () => setShow(!show);
    const submitHandler = async () => {
      setLoading(true);
      if (email==="" || password==="") {
        toast({
          title: "Please fill all Field.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
        return;
      }
  
      try {
        const config = {
          headers: { "Content-type": "application/json" },
        };
      const {data}= await axios.post(
        "https://web-production-ae8c.up.railway.app/login",
          // "http://localhost:5000/login",
          { email, password },
          config
        );
        console.log("success");
        toast({
          title: "Login Successful",
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
        localStorage.setItem("logedinuser", JSON.stringify(data));
        setLoading(false);
        setTimeout(() => {
          
        setshow(false)
        }, 1000);

      } catch (e) {
        console.log(e.message);
        toast({
          title: "Invalid email or Password",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      }
    };
    return (
      <VStack spacing={"5px"} width="100%" >
        <FormControl isRequired>
          <FormLabel>Email </FormLabel>
          <Input
            value={email}
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              value={password}
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
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
          Login
        </Button>
      </VStack>
    );
  };
  
  export default SignIn;
  