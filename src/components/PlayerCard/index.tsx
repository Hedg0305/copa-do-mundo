import { Avatar, Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

export interface PlayerProps {
  birthdate: Date;
  name: string;
  age: number;
  position?: string | null;
  stats: {
    defenses?: number | null;
    sufferedGoals?: number | null;
    goals?: number | null;
    assists?: number | null;
    yellowCards: number | null;
    redCards: number;
  };
}

const Player = ({ birthdate, name, age, position, stats }: PlayerProps) => {
  return (
    <Box
      p='15px'
      w='400px'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      bg='whiteAlpha.700'
      fontSize='18px'
      borderColor='gray.300'
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Avatar name={name} />
        <Box
          fontWeight='Bold'
          as='h2'
          lineHeight='tight'
          color='blackAlpha.700'
        >
          {name}
          <Box>{age} anos</Box>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          color='blackAlpha.800'
        >
          {/* {birthdate} */}
          <div>Posição: {position}</div>
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-between' mt='15px'>
        {position !== "GOL" ? (
          <List>
            <ListItem>{stats?.goals} Gols</ListItem>
            <ListItem>{stats?.assists} Assistências</ListItem>
          </List>
        ) : (
          <List>
            <ListItem>{stats?.defenses} Defesas</ListItem>
            <ListItem>{stats?.sufferedGoals} Gols sofridos</ListItem>
          </List>
        )}
        <List>
          <ListItem color='yellow.500'>
            {stats.yellowCards} Cartões amarelos
          </ListItem>
          <ListItem color='red'>{stats.redCards} Cartões vermelhos</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Player;

