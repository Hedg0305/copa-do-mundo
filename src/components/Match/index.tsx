import { Box, Center } from "@chakra-ui/react";
import React from "react";

export interface MatchProps {
  stadium: string;
  team1: string;
  fase: string;
  team2: string;
  goalsTeam1: number;
  goalsTeam2: number;
  winner: string;
  gameDate: Date;
}

const Match = ({
  stadium,
  fase,
  team1,
  team2,
  goalsTeam1,
  goalsTeam2,
  winner,
  gameDate,
}: MatchProps) => {
  const newGameDate = String(new Date(gameDate).toLocaleDateString("pt-BR"));
  return (
    <Box
      bgColor='gray.500'
      color='white'
      p='15px'
      borderRadius='10px'
      borderBottom='1px'
      boxShadow='xl'
      fontSize='20px'
    >
      <Box
        textTransform='capitalize'
        fontWeight='semibold'
        textDecoration='underline'
      >
        {fase} ({newGameDate})
      </Box>
      <Center display='flex' fontSize='24px'>
        <Box
          as='span'
          color={winner === team1 ? "green.300" : "white"}
          mr='20px'
        >
          {team1}
        </Box>
        <Box>
          <Box as='span' color={winner === team1 ? "green.300" : "white"}>
            {goalsTeam1}
          </Box>{" "}
          X{" "}
          <Box as='span' color={winner === team2 ? "green.300" : "white"}>
            {goalsTeam2}
          </Box>
        </Box>
        <Box
          as='span'
          color={winner === team2 ? "green.300" : "white"}
          ml='20px'
        >
          {team2}
        </Box>
      </Center>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        color='gray.700'
        fontWeight='semibold'
      >
        Estádio: {stadium}
      </Box>
    </Box>
  );
};

export default Match;
