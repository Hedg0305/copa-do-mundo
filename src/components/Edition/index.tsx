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
        _hover={{
          color: "white",
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

