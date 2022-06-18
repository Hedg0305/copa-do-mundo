import React from "react";
import { GetServerSideProps } from "next";
import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import Player, { PlayerProps } from "../../components/PlayerCard";
import TechnicalComittee, {
  ComitteeProps,
} from "../../components/TechnicalComittee";

interface ServerSideProps {
  edition: string;
  team: string;
}

interface PageProps {
  hostCountry: string;
  year: number;
  team: string;
  players: PlayerProps[];
  technicalComittee: ComitteeProps[];
}

const Competition = ({
  hostCountry,
  year,
  team,
  technicalComittee,
  players,
}: PageProps) => {
  return (
    <Box bgColor='gray.400' h='100vh'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Copa do mundo - {hostCountry} - {year}
          </Heading>
          <Heading as='h2' size='lg'>
            {team}
          </Heading>
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
            {technicalComittee.map((comittee) => (
              <TechnicalComittee
                passport={comittee.passport}
                name={comittee.name}
                age={comittee.age}
                key={comittee.passport}
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
  const { edition, team } = params as unknown as ServerSideProps;
  const [year, hostCountry] = edition.split("-");

  return {
    props: {
      year,
      hostCountry,
      team,
      technicalComittee: [
        {
          passport: "56467987451",
          name: "Hernan Gomez",
          age: 45,
          birthdate: "12/06/1985",
          role: "Técnico",
        },
      ],
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

