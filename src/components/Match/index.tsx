import { Box, Center } from "@chakra-ui/react";
import React from "react";

interface MatchProps {
  stadium: string;
  team1: string;
  team2: string;
  goalsTeam1: number;
  goalsTeam2: number;
  winner: string;
  gameDate: string;
}

const Match = ({
  stadium,
  team1,
  team2,
  goalsTeam1,
  goalsTeam2,
  winner,
  gameDate,
}: MatchProps) => {
  return (
    <Box
      bgColor='gray.300'
      p='15px'
      borderRadius='10px'
      borderBottom='1px'
      key={gameDate}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        Estádio: {stadium}
        <br />
        Data: {gameDate}
      </Box>
      <Center>
        <Box
          as='span'
          color={winner === team1 ? "green.400" : "black"}
          mr='20px'
        >
          {team1}
        </Box>
        {goalsTeam1} X {goalsTeam2}
        <Box
          as='span'
          color={winner === team2 ? "green.400" : "black"}
          ml='20px'
        >
          {team2}
        </Box>
      </Center>
    </Box>
  );
};

export default Match;
