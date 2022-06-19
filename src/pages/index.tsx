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
import type { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { createCompetition, getCompetitions } from "../api/competitions";
import Edition from "../components/Edition";

interface HomeProps {
  editions: Competition[];
}

export interface Competition {
  id: string;
  year: number;
  country: string;
}

const Home = ({ editions }: HomeProps) => {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState<number>();
  const [newEditions, setNewEditions] = useState<Competition[]>([]);

  useEffect(() => {
    setNewEditions(editions);
  }, [editions]);

  const handleSubmit = async () => {
    if (country && year) {
      try {
        const { competicoes } = await createCompetition(country, year);
        const formattedCompetitions = competicoes.map((competition) => ({
          id: competition.id,
          year: competition.ano,
          country: competition.paisSede,
        }));
        setNewEditions(formattedCompetitions);
      } catch (e) {
        setNewEditions(newEditions);
      }
    }
  };

  return (
    <Box>
      <Center h='100vh'>
        <VStack justifyContent='center'>
          <Heading as='h1' size='2xl' mb='10'>
            Gerenciador de copas do mundo
          </Heading>
          <Grid gridTemplateColumns='repeat(4, 1fr)' gap='20px'>
            {newEditions.map((edition) => (
              <Edition
                key={edition.id}
                id={edition.id}
                country={edition.country}
                year={edition.year}
              />
            ))}
          </Grid>

          <FormControl
            display='flex'
            alignItems='flex-end'
            gap='20px'
            w='min-content'
          >
            <Box>
              <FormLabel htmlFor='country'>País</FormLabel>
              <Input
                id='country'
                type='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                w='250px'
              />
            </Box>
            <Box>
              <FormLabel htmlFor='year'>Ano</FormLabel>
              <Input
                id='year'
                type='text'
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                w='100px'
              />
            </Box>

            <Button colorScheme='teal' type='submit' onClick={handleSubmit}>
              Enviar
            </Button>
          </FormControl>
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const editions = await getCompetitions();
  const formatedEditions = editions.map((edition) => ({
    id: edition.id,
    country: edition.paisSede,
    year: edition.ano,
  }));

  return {
    props: {
      editions: formatedEditions ?? [],
    },
  };
};

