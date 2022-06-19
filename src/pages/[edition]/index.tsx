import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Bracket from "../../components/Bracket";
import { useRouter } from "next/router";
import { createTeam, getTeams, Team } from "../../api/team";
import { TeamInfo } from "./[team]";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteList,
  AutoCompleteItem,
  AutoCompleteRefMethods,
} from "@choc-ui/chakra-autocomplete";

interface ServerSideProps {
  edition: string;
}

interface PageProps {
  country: string;
  year: number;
  groups: {
    [key: string]: TeamInfo[];
  };
  countryOptions: {
    name: string;
    flag: string;
  }[];
}

const Competition = ({ country, year, groups, countryOptions }: PageProps) => {
  const [countryName, setCountryName] = useState("");
  const [group, setGroup] = useState("");
  const router = useRouter();
  const [newGroups, setNewGroups] = useState<{
    [key: string]: TeamInfo[];
  }>({});

  useEffect(() => {
    setNewGroups(groups);
  }, [groups]);

  const autocompleteCountriesRef = React.useRef<AutoCompleteRefMethods>(null);
  const autocompleteGroupsRef = React.useRef<AutoCompleteRefMethods>(null);

  const handleSubmit = async () => {
    if (countryName && group) {
      const { equipesDaEdicao } = await createTeam(countryName, year, group);
      const splitGroups = formatTeams(equipesDaEdicao);
      setNewGroups(splitGroups);
      autocompleteCountriesRef?.current?.removeItem(countryName);
      autocompleteGroupsRef?.current?.removeItem(group);
      setCountryName("");
      setGroup("");
    }
  };

  const handleSeeMatches = () => {
    router.push(`${router.asPath}/matches`);
  };

  return (
    <Box minH='100vh' bgColor='gray.400' p='20px 0 20px 0'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Copa do mundo - {country} - {year}
          </Heading>

          <FormControl display='flex' alignItems='flex-end' gap='20px'>
            <Box>
              <FormLabel>Selecione um time</FormLabel>
              <AutoComplete
                openOnFocus
                onChange={(value) => setCountryName(value)}
                ref={autocompleteCountriesRef}
              >
                <AutoCompleteInput variant='filled' />
                <AutoCompleteList>
                  {countryOptions.map((country) => (
                    <AutoCompleteItem
                      key={`option-${country.name}`}
                      value={country.name}
                      textTransform='capitalize'
                      align='center'
                    >
                      <Avatar
                        size='sm'
                        name={country.name}
                        src={country.flag}
                      />
                      <Text ml='4'>{country.name}</Text>
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteList>
              </AutoComplete>
            </Box>
            <Box>
              <FormLabel>Selecione um grupo</FormLabel>
              <AutoComplete
                openOnFocus
                onChange={(value) => setGroup(value)}
                ref={autocompleteGroupsRef}
              >
                <AutoCompleteInput variant='filled' />
                <AutoCompleteList>
                  {[
                    "Grupo A",
                    "Grupo B",
                    "Grupo C",
                    "Grupo D",
                    "Grupo E",
                    "Grupo F",
                    "Grupo G",
                    "Grupo H",
                  ].map((group) => (
                    <AutoCompleteItem
                      key={`option-${group}`}
                      value={group}
                      textTransform='capitalize'
                      align='center'
                    >
                      <Text ml='4'>{group}</Text>
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteList>
              </AutoComplete>
            </Box>
            <Button colorScheme='teal' type='submit' onClick={handleSubmit}>
              Enviar
            </Button>
            <Button type='button' colorScheme='gray' onClick={handleSeeMatches}>
              Ver partidas
            </Button>
          </FormControl>

          <Grid gridTemplateColumns='repeat(2, 1fr)' gap='25px'>
            {Object?.keys(newGroups)?.map((key) => {
              return <Bracket group={key} key={key} teams={newGroups[key]} />;
            })}
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
  const teams = await getTeams(Number(year));
  const groups = formatTeams(teams);

  const countriesOptions = await fetch("https://restcountries.com/v2/all");
  const countriesJSON = await countriesOptions.json();

  const formatOptions = countriesJSON.map((country: any) => ({
    name: country.name,
    flag: country.flags.png,
  }));

  return {
    props: {
      year,
      country,
      groups,
      countryOptions: formatOptions,
    },
  };
};

const formatTeams = (teams: Team[]) => {
  const formatedTeams = teams.map<TeamInfo>((team) => ({
    country: team.pais,
    id: team.id,
    draws: team.numeroDeEmpates,
    loses: team.numeroDeDerrotas,
    wins: team.numeroDeVitorias,
    golsPro: team.golsPro,
    goalsDifference: team.saldoDeGols,
    goalsAgainst: team.golsContra,
    group: team.grupo,
    year: team.ano,
  }));

  const separatedGroups = formatedTeams.reduce<{ [key: string]: TeamInfo[] }>(
    (acc, team) => {
      const group = team.group;
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(team);
      return acc;
    },
    {}
  );

  return separatedGroups;
};

