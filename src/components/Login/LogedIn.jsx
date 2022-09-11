import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { Signup } from "../Signup/Signup";

export const LogedIn = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [login, setLogin] = useState(true);
  return (
    <Box>
      {login ? (
        <Button variant="link" bg="white" mr={5} onClick={onToggle}>
          Signup
        </Button>
      ) : (
        <Button variant="outline" bg="white" mr={5} onClick={onToggle}>
          Logout
        </Button>
      )}
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }} >
        <PopoverContent style={{ marginLeft: "180%", marginTop: "10%" }}>
          <Signup />
          <Button
            varient={"solid"}
            bg={"#84c225"}
            schema="white"
            color="white"
            width={"100%"}
            fontSize={"14px"}
            fontWeight="450"
            onClick={onClose}
          >
            Continue
          </Button>
          <PopoverArrow />
          <PopoverCloseButton />
        </PopoverContent>
      </Popover>
    </Box>
  );
};
