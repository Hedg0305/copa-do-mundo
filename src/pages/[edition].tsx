import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";

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
      <Center h='100vh'>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Copa do mundo - {country} - {year}
          </Heading>
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

