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
    defenses?: number;
    sufferedGoals?: number;
    goals?: number;
    assists?: number;
    yellowCards: number;
    redCards: number;
  }
}

const Player = ({ country, passport, year, name, age, birthdate, position, stats }: PlayerProps) => {
  return (
    <Box p="15px" w='350px' borderWidth='1px' borderRadius='lg' overflow='hidden' bg="white" fontSize="18px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Avatar name={name} />
        <Box
          fontWeight='Bold'
          as='h2'
          lineHeight='tight'
          color="blackAlpha.700"
        >
          {name}
          <Box as="h3">
            {age} anos
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" flexDirection="column" color="blackAlpha.800">
          {country}
          <div>
            Posição: {position}
          </div>
        </Box>
      </Box>
      <Box display='flex' justifyContent="space-between" mt="15px">
        {position !== "GOL" ?
          (<List>
            <ListItem>
              {stats?.goals} Gols
            </ListItem>
            <ListItem>
              {stats?.assists} Assistências
            </ListItem>
          </List>) :
          (
            <List>
              <ListItem>
                {stats?.defenses} Defesas
              </ListItem>
              <ListItem>
                {stats?.sufferedGoals} Gols sofridos
              </ListItem>
            </List>
          )

        }
        <List>
          <ListItem color="yellow.400">
            {stats.yellowCards} Cartões amarelos
          </ListItem>
          <ListItem color="red">
            {stats.redCards} Cartões vermelhos
          </ListItem>
        </List>
      </Box>
    </Box >
  );
};

export default Player;

