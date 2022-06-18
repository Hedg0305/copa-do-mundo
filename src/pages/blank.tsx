import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Player from "../components/PlayerCard";

const blank = () => {
  return (
    <Box bgColor='gray.100'>
      <Center h='100vh'>
        <Player
          passport="32132131"
          birthdate="12/04/1995"
          name="Neymar Jr."
          age={30}
          position="PE"
          stats={
            {
              goals: 12,
              assists: 4,
              yellowCards: 1,
              redCards: 0,
            }
          }
        />
      </Center>
    </Box>
  );
};

export default blank;

