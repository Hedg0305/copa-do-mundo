import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import Bracket from "../../components/Bracket";

interface ServerSideProps {
  edition: string;
  team: string;
}

interface PageProps {
  hostCountry: string;
  year: number;
  team: string;
}

const Competition = ({ hostCountry, year, team }: PageProps) => {
  return (
    <Box bgColor='gray.400'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Copa do mundo - {hostCountry} - {year}
          </Heading>

          <Heading as='h2' size='lg' mb='10'>
            {team}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

export default Competition;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { edition, team } = params as unknown as ServerSideProps;
  const [year, hostCountry] = edition.split("-");
  console.log(year);

  return {
    props: {
      year,
      hostCountry,
      team,
    },
  };
};

