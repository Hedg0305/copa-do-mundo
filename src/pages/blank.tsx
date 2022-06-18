import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Bracket from "../components/Bracket";

const blank = () => {
  return (
    <Box bgColor='gray.100'>
      <Center h='100vh'>
        <Bracket />
      </Center>
    </Box>
  );
};

export default blank;

