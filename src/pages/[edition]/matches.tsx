import React from "react";
import { GetServerSideProps } from "next";
import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import Match from "../../components/Match";
import AddMatchForm from "../../components/AddMatchForm";
interface ServerSideProps {
  edition: string;
}

interface PageProps {
  year: string;
  matches: Matches[];
}

interface Matches {
  fase: string;
  stadium: string;
  team1: string;
  team2: string;
  goalsTeam1: number;
  goalsTeam2: number;
  winner: string;
  gameDate: string;
}

const Matches = ({ year, matches }: PageProps) => {
  return (
    <Box h='100%' p='20px 0 20px 0'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Partidas - {year}
          </Heading>
          <AddMatchForm />
          <Grid gridTemplateColumns='repeat(2, 1fr)' gap='20px'>
            {matches.map((match, index) => (
              <Match
                gameDate={match.gameDate}
                goalsTeam1={match.goalsTeam1}
                goalsTeam2={match.goalsTeam2}
                stadium={match.stadium}
                team1={match.team1}
                team2={match.team2}
                winner={match.winner}
                fase={match.fase}
                key={index}
              />
            ))}
          </Grid>
        </VStack>
      </Center>
    </Box>
  );
};

export default Matches;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { edition } = params as unknown as ServerSideProps;
  const [year, country] = edition.split("-");

  return {
    props: {
      year,
      country,
      matches: [
        {
          fase: "grupos",
          stadium: "Santigao Bernabéu",
          team1: "Alemanha",
          team2: "Brasil",
          goalsTeam1: 1,
          goalsTeam2: 3,
          winner: "Brasil",
          gameDate: "05/09/2022",
        },
        {
          fase: "quartas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "final",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "semis",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "semis",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "quartas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "quartas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "quartas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "oitavas",
          stadium: "Camp Nou",
          team1: "Holanda",
          team2: "Inglaterra",
          goalsTeam1: 2,
          goalsTeam2: 2,
          winner: "",
          gameDate: "03/09/2022",
        },
        {
          fase: "grupos",
          stadium: "Allianz Park",
          team1: "Portugal",
          team2: "Espanha",
          goalsTeam1: 2,
          goalsTeam2: 1,
          winner: "Portugal",
          gameDate: "06/09/2022",
        },
      ],
    },
  };
};
