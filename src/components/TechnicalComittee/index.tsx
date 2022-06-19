import { Avatar, Box } from "@chakra-ui/react";
import React from "react";

export interface ComitteeProps {
  name: string;
  age: number;
  birthdate: string;
  role: string;
}

const TechnicalComittee = ({
  birthdate,
  name,
  age,
  role,
}: ComitteeProps) => {
  return (
    <Box
      p='15px'
      w='400px'
      borderWidth='1px'
      borderRadius='lg'
      borderColor='gray.300'
      overflow='hidden'
      bg='whiteAlpha.700'
      fontSize='18px'
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
          {birthdate}
          <div>{role}</div>
        </Box>
      </Box>
    </Box>
  );
};

export default TechnicalComittee;

