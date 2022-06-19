import React, { useEffect, useState } from "react";
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
import { createTeam, getTeams, Team } from "../../api/team";
import { TeamInfo } from "./[team]";

interface ServerSideProps {
  edition: string;
}

interface PageProps {
  country: string;
  year: number;
  groups: {
    [key: string]: TeamInfo[];
  };
}

const Competition = ({ country, year, groups }: PageProps) => {
  const [countryName, setCountryName] = useState("");
  const [group, setGroup] = useState("");
  const router = useRouter();
  const [newGroups, setNewGroups] = useState<{
    [key: string]: TeamInfo[];
  }>({});

  const handleInputChange = (e: any) => setCountryName(e.target.value);

  useEffect(() => {
    setNewGroups(groups);
  }, [groups]);

  const handleSubmit = async () => {
    if (countryName && group) {
      const { equipesDaEdicao } = await createTeam(countryName, year, group);
      const splitGroups = formatTeams(equipesDaEdicao);
      setNewGroups(splitGroups);
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
              <FormLabel htmlFor='country'>Nome da equipe</FormLabel>
              <Input
                id='country'
                type='country'
                value={countryName}
                onChange={handleInputChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor='selectGroup'>Grupo</FormLabel>
              <Select
                placeholder='Selecionar'
                id='selectGroup'
                onChange={(e) => setGroup(e.target.value)}
              >
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
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </Select>
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

  return {
    props: {
      year,
      country,
      groups,
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

