import React, { useState } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import Bracket from "../../components/Bracket";
import { useRouter } from "next/router";

interface ServerSideProps {
  edition: string;
}

interface PageProps {
  country: string;
  year: number;
}

const Competition = ({ country, year }: PageProps) => {
  const [countryName, setCountryName] = useState("");
  const [group, setGroup] = useState("");
  const router = useRouter();

  const handleInputChange = (e: any) => setCountryName(e.target.value);

  const handleSubmit = () => {
    console.log("Country: ", countryName);
    console.log("Group: ", group);
  };

  const handleSeeMatches = () => {
    router.push(`${router.asPath}/matches`);
  }

  return (
    <Box minH='100vh' bgColor='gray.400'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Copa do mundo - {country} - {year}
          </Heading>

          <FormControl display='flex' alignItems='flex-end' gap='20px'>
            <Box>
              <FormLabel htmlFor='country'>Country name</FormLabel>
              <Input
                id='country'
                type='country'
                value={countryName}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor='selectGroup'>Select a group</FormLabel>
              <Select
                placeholder='Select option'
                id='selectGroup'
                onChange={(e) => setGroup(e.target.value)}
              >
                {["a", "b", "c", "d", "e", "f", "g", "h"].map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </Select>
            </Box>
            <Button colorScheme='teal' type='submit' onClick={handleSubmit}>
              Submit
            </Button>
          </FormControl>
          <Button type='button' colorScheme='gray' onClick={handleSeeMatches}>
            Ver partidas
          </Button>
          <Grid gridTemplateColumns='repeat(2, 1fr)' gap='25px'>
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
            <Bracket group='Grupo A' />
          </Grid>
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

