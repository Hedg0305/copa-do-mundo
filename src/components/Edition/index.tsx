import { Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface EditionProps {
  id: string;
  year: number;
  country: string;
}

const Edition = ({ country, id, year }: EditionProps) => {
  return (
    <Link href={`${String(year)}-${country}`}>
      <VStack
        cursor='pointer'
        transition='0.4s'
        _hover={{
          color: "white",
          _after: {
            w: "100%",
          },
        }}
        _after={{
          content: '""',
          display: "block",
          m: "5px",
          h: "2px",
          w: "0px",
          bg: "white",
          transition: "width .4s ease, background-color .4s ease",
        }}
      >
        <Heading as='h3' size='lg'>
          {year}
        </Heading>
        <Heading as='h4' size='md'>
          {country}
        </Heading>
      </VStack>
    </Link>
  );
};

export default Edition;
