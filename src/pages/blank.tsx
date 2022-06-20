import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Player from "../components/PlayerCard";
import TechnicalComittee from "../components/TechnicalComittee";

const blank = () => {
  return (
    <Box bgColor='gray.100'>
      <Center h='100vh'>
        <Player
          passport='32132131'
          birthdate='12/04/1995'
          name='Neymar Jr.'
          age={30}
          position='PE'
          stats={{
            defenses: 12,
            assists: 4,
            yellowCards: 1,
            redCards: 0,
          }}
        />
        <TechnicalComittee
          name='Tite'
          age={52}
          birthdate='07/08/1983'
          role='Técnico'
        />
      </Center>
    </Box>
  );
};

export default blank;

