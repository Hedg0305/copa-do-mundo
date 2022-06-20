import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import Player, { PlayerProps } from "../../../components/PlayerCard";
import TechnicalComittee, {
  ComitteeProps,
} from "../../../components/TechnicalComittee";
import AddPersonForm from "../../../components/AddPersonForm";
import { ComicaoInfo, getCommittee } from "../../../api/comittee";

interface ServerSideProps {
  edition: string;
  team: string;
  id: string;
}

interface PageProps {
  hostCountry: string;
  year: number;
  team: string;
  players: PlayerProps[];
  technicalComittee: ComitteeProps[];
}

export interface TeamInfo {
  id: number;
  country: string;
  year: number;
  group: string;
  golsPro: number;
  goalsAgainst: number;
  goalsDifference: number;
  wins: number;
  loses: number;
  draws: number;
}

const Competition = ({
  hostCountry,
  year,
  team,
  technicalComittee,
  players,
}: PageProps) => {
  const [technicalComitteeList, setTechnicalComitteeList] =
    useState<ComitteeProps[]>();

  useEffect(() => {
    setTechnicalComitteeList(technicalComittee);
  }, [technicalComittee]);

  return (
    <Box minH='100vh'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Copa do mundo - {hostCountry} - {year}
          </Heading>

          <Heading as='h2' size='lg'>
            {team}
          </Heading>

          <AddPersonForm upDateComittee={setTechnicalComitteeList} />

          <Heading as='h3' size='md'>
            Jogadores
          </Heading>
          <Grid templateColumns='repeat(2, 1fr)' gap='35px'>
            {players.map((player) => (
              <Player
                key={player.passport}
                passport={player.passport}
                birthdate={player.birthdate}
                name={player.name}
                age={player.age}
                position={player.position}
                stats={player.stats}
              />
            ))}
          </Grid>
          <Heading as='h3' size='md'>
            Comissão Técnica
          </Heading>
          <Grid templateColumns='repeat(2, 1fr)' gap='35px'>
            {technicalComitteeList?.map((comittee, index) => (
              <TechnicalComittee
                key={comittee.name + comittee.age + index}
                name={comittee.name}
                age={comittee.age}
                birthdate={comittee.birthdate}
                role={comittee.role}
              />
            ))}
          </Grid>
        </VStack>
      </Center>
    </Box>
  );
};

export default Competition;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { edition, team, id: teamId } = params as unknown as ServerSideProps;
  const [year, hostCountry] = edition.split("-");

  const comittee = await getCommittee(teamId, year);
  const formattedComittee = formatComittee(comittee);

  return {
    props: {
      year,
      hostCountry,
      team,
      technicalComittee: formattedComittee,
      players: [
        {
          passport: "231654564",
          birthdate: "12/12/1995",
          name: "Lionel Messi",
          age: 34,
          position: "PE",
          stats: {
            goals: 13,
            assists: 5,
            yellowCards: 1,
            redCards: 0,
          },
        },
        {
          passport: "32132131",
          birthdate: "12/12/1999",
          name: "Emiliano Martinez",
          age: 29,
          position: "GOL",
          stats: {
            defenses: 34,
            sufferedGoals: 5,
            yellowCards: 0,
            redCards: 0,
          },
        },
      ],
    },
  };
};

export function formatComittee(comittee: ComicaoInfo[]): ComitteeProps[] {
  return comittee.map((comittee) => {
    return {
      name: comittee.nome,
      age: comittee.idade,
      birthdate: comittee.dataNascimento,
      role: comittee.funcao,
    };
  });
}

