import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import Bracket from "../components/Bracket";

interface ServerSideProps {
  edition: string;
}

interface PageProps {
  country: string;
  year: number;
}

const Competition = ({ country, year }: PageProps) => {
  return (
    <Box bgColor='gray.400'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Copa do mundo - {country} - {year}
          </Heading>

          <Flex
            wrap='wrap'
            alignItems='center'
            justifyContent='center'
            gap='10px'
          >
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
};

export default Competition;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { edition } = params as unknown as ServerSideProps;
  const [year, country] = edition.split("-");

  return {
    props: {
      year,
      country,
    },
  };
};

