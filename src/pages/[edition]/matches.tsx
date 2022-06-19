import React from "react";
import { GetServerSideProps } from "next";
import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import Match from "../../components/Match";
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
          <Grid boxShadow='xl'>
            {matches
              .filter((match) => match.fase === "grupos")
              .map((groupMatch, index) => (
                <Box
                  bg={index % 2 === 0 ? "gray.200" : "gray.300"}
                  key={groupMatch.gameDate}
                  w='60vw'
                  fontSize='20px'
                  p='20px'
                >
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Box>
                      Fase: {groupMatch.fase}
                      <br />
                      Estádio: {groupMatch.stadium}
                    </Box>
                    Data: {groupMatch.gameDate}
                  </Box>
                  <Center>
                    <Box
                      as='span'
                      color={
                        groupMatch.winner === groupMatch.team1
                          ? "green.400"
                          : "black"
                      }
                      mr='20px'
                    >
                      {groupMatch.team1}
                    </Box>
                    {groupMatch.goalsTeam1} X {groupMatch.goalsTeam2}
                    <Box
                      as='span'
                      color={
                        groupMatch.winner === groupMatch.team2
                          ? "green.400"
                          : "black"
                      }
                      ml='20px'
                    >
                      {groupMatch.team2}
                    </Box>
                  </Center>
                </Box>
              ))}
          </Grid>
        </VStack>
      </Center>
      <Center display='flex' flexDirection='column' mt='30px'>
        <Box
          display='flex'
          w='100%'
          justifyContent='center'
          fontSize='18px'
          fontWeight='Bold'
        >
          <Box w='242px' textAlign='center'>
            OITAVAS
          </Box>
          <Box w='242px' textAlign='center'>
            QUARTAS
          </Box>
          <Box w='242px' textAlign='center'>
            SEMIFINAIS
          </Box>
          <Box w='242px' textAlign='center'>
            FINAL
          </Box>
        </Box>
        <Box display='flex'>
          <Box
            display='flex'
            flexDirection='column'
            m='5px'
            justifyContent='space-between'
          >
            {matches
              .filter((matches) => matches.fase === "oitavas")
              .map((round16Match) => (
                <Match
                  key={round16Match.gameDate}
                  gameDate={round16Match.gameDate}
                  goalsTeam1={round16Match.goalsTeam1}
                  goalsTeam2={round16Match.goalsTeam2}
                  stadium={round16Match.stadium}
                  team1={round16Match.team1}
                  team2={round16Match.team2}
                  winner={round16Match.winner}
                />
              ))}
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            m='5px'
            justifyContent='space-around'
          >
            {matches
              .filter((matches) => matches.fase === "quartas")
              .map((quarterFinalsMatch) => (
                <Match
                  key={quarterFinalsMatch.gameDate}
                  gameDate={quarterFinalsMatch.gameDate}
                  goalsTeam1={quarterFinalsMatch.goalsTeam1}
                  goalsTeam2={quarterFinalsMatch.goalsTeam2}
                  stadium={quarterFinalsMatch.stadium}
                  team1={quarterFinalsMatch.team1}
                  team2={quarterFinalsMatch.team2}
                  winner={quarterFinalsMatch.winner}
                />
              ))}
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            m='5px'
            justifyContent='space-around'
          >
            {matches
              .filter((matches) => matches.fase === "semis")
              .map((semifinalsMatch) => (
                <Match
                  key={semifinalsMatch.gameDate}
                  gameDate={semifinalsMatch.gameDate}
                  goalsTeam1={semifinalsMatch.goalsTeam1}
                  goalsTeam2={semifinalsMatch.goalsTeam2}
                  stadium={semifinalsMatch.stadium}
                  team1={semifinalsMatch.team1}
                  team2={semifinalsMatch.team2}
                  winner={semifinalsMatch.winner}
                />
              ))}
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            m='5px'
            justifyContent='space-around'
          >
            {matches
              .filter((matches) => matches.fase === "final")
              .map((finalMatch) => (
                <Match
                  key={finalMatch.gameDate}
                  gameDate={finalMatch.gameDate}
                  goalsTeam1={finalMatch.goalsTeam1}
                  goalsTeam2={finalMatch.goalsTeam2}
                  stadium={finalMatch.stadium}
                  team1={finalMatch.team1}
                  team2={finalMatch.team2}
                  winner={finalMatch.winner}
                />
              ))}
          </Box>
        </Box>
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

