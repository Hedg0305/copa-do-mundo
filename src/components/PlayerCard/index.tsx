import { Avatar, Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

interface PlayerProps {
  passport: string;
  year: number;
  country: string;
  name: string;
  age: number;
  birthdate: string;
  position: string;
  stats: {
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
  }
}

const Player = ({ country, passport, year, name, age, birthdate, position, stats }: PlayerProps) => {
  return (
    <Box p="15px" w='300px' borderWidth='1px' borderRadius='lg' overflow='hidden' bg="white">
      <Box>
        <Avatar name={name} />
      </Box>
      <Box
        mt='1'
        fontWeight='Bold'
        as='h2'
        lineHeight='tight'
        noOfLines={1}
      >
        {name} - {age} - {birthdate}
      </Box>
      <Box>
        {country} - {year}
      </Box>
      <Box display='flex'>
        Posição: {position}
        <List>
          <ListItem>
            {stats.goals} Gols
          </ListItem>
          <ListItem>
            {stats.assists} Assistências
          </ListItem>
          <ListItem>
            {stats.yellowCards} Cartões amarelos
          </ListItem>
          <ListItem>
            {stats.redCards} Cartões vermelhos
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Player;

