import { Box, Center, Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Edition from "../components/Edition";

interface HomeProps {
  editions: Edition[];
}

interface Edition {
  id: string;
  year: number;
  country: string;
}

const Home = ({ editions }: HomeProps) => {
  return (
    <Box bgColor='gray.400'>
      <Center h='100vh'>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Gerenciador de copas do mundo
          </Heading>
          <Flex gap='20px'>
            {editions.map((edition) => (
              <Edition
                key={edition.id}
                id={edition.id}
                country={edition.country}
                year={edition.year}
              />
            ))}
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      editions: [
        {
          id: 1,
          year: 2022,
          country: "Qatar",
        },
        {
          id: 2,
          year: 2018,
          country: "Russia",
        },
        {
          id: 3,
          year: 2014,
          country: "Brasil",
        },
      ]
    },
  };
};

