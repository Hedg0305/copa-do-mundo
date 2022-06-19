import React from "react";
import { GetServerSideProps } from "next";
import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";

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
    <Box bgColor='gray.400' h="100%" w="100%">
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Partidas - {year}
          </Heading>
          <Grid>
            {matches.filter((match => match.fase === "grupos")).map((groupMatch, index) => (
              <Box bg={index % 2 === 0 ? "gray.200" : "gray.300"} key={groupMatch.gameDate} w="60vw" fontSize="20px" p="20px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    Fase: {groupMatch.fase}
                    <br />
                    Estádio: {groupMatch.stadium}
                  </Box>
                  Data: {groupMatch.gameDate}
                </Box>
                <Center>
                  <Box as="span" color={groupMatch.winner === groupMatch.team1 ? "green.400" : "black"} mr="20px">
                    {groupMatch.team1}
                  </Box>
                  {groupMatch.goalsTeam1} X {groupMatch.goalsTeam2}
                  <Box as="span" color={groupMatch.winner === groupMatch.team2 ? "green.400" : "black"} ml="20px">
                    {groupMatch.team2}
                  </Box>
                </Center>
              </Box>
            ))}
          </Grid>
        </VStack>
      </Center>
      <Center>
        <Box display="flex">
          <Box display="flex" flexDirection="column" m="40px" h="700px" justifyContent="space-between">
            OITAVAS
            {matches.filter((matches => matches.fase === "oitavas")).map((round16Match) => (
              <Box bgColor="gray.300" p="15px" w="300px" borderBottom="1px" key={round16Match.gameDate}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    Estádio: {round16Match.stadium}
                  </Box>
                  Data: {round16Match.gameDate}
                </Box>
                <Center>
                  <Box as="span" color={round16Match.winner === round16Match.team1 ? "green.400" : "black"} mr="20px">
                    {round16Match.team1}
                  </Box>
                  {round16Match.goalsTeam1} X {round16Match.goalsTeam2}
                  <Box as="span" color={round16Match.winner === round16Match.team2 ? "green.400" : "black"} ml="20px">
                    {round16Match.team2}
                  </Box>
                </Center>
              </Box>
            ))}
          </Box>
          <Box display="flex" flexDirection="column" m="40px" h="680px" justifyContent="space-between">
            QUARTAS
            {matches.filter((matches => matches.fase === "quartas")).map((quarterFinalsMatch) => (
              <Box bgColor="gray.300" p="15px" w="300px" borderBottom="1px" key={quarterFinalsMatch.gameDate}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    Estádio: {quarterFinalsMatch.stadium}
                  </Box>
                  Data: {quarterFinalsMatch.gameDate}
                </Box>
                <Center>
                  <Box as="span" color={quarterFinalsMatch.winner === quarterFinalsMatch.team1 ? "green.400" : "black"} mr="20px">
                    {quarterFinalsMatch.team1}
                  </Box>
                  {quarterFinalsMatch.goalsTeam1} X {quarterFinalsMatch.goalsTeam2}
                  <Box as="span" color={quarterFinalsMatch.winner === quarterFinalsMatch.team2 ? "green.400" : "black"} ml="20px">
                    {quarterFinalsMatch.team2}
                  </Box>
                </Center>
              </Box>
            ))}
          </Box>
          <Box display="flex" flexDirection="column" m="40px" h="580px" justifyContent="space-between">
            SEMIFINAIS
            {matches.filter((matches => matches.fase === "semis")).map((semifinalsMatch) => (
              <Box bgColor="gray.300" p="15px" w="300px" borderBottom="1px" key={semifinalsMatch.gameDate}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    Estádio: {semifinalsMatch.stadium}
                  </Box>
                  Data: {semifinalsMatch.gameDate}
                </Box>
                <Center>
                  <Box as="span" color={semifinalsMatch.winner === semifinalsMatch.team1 ? "green.400" : "black"} mr="20px">
                    {semifinalsMatch.team1}
                  </Box>
                  {semifinalsMatch.goalsTeam1} X {semifinalsMatch.goalsTeam2}
                  <Box as="span" color={semifinalsMatch.winner === semifinalsMatch.team2 ? "green.400" : "black"} ml="20px">
                    {semifinalsMatch.team2}
                  </Box>
                </Center>
              </Box>
            ))}
          </Box>
          <Box display="flex" flexDirection="column" m="40px" h="450px" justifyContent="space-between">
            FINAL
            {matches.filter((matches => matches.fase === "final")).map((finalMatch) => (
              <Box bgColor="gray.300" p="15px" w="300px" borderBottom="1px" key={finalMatch.gameDate}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    Estádio: {finalMatch.stadium}
                  </Box>
                  Data: {finalMatch.gameDate}
                </Box>
                <Center>
                  <Box as="span" color={finalMatch.winner === finalMatch.team1 ? "green.400" : "black"} mr="20px">
                    {finalMatch.team1}
                  </Box>
                  {finalMatch.goalsTeam1} X {finalMatch.goalsTeam2}
                  <Box as="span" color={finalMatch.winner === finalMatch.team2 ? "green.400" : "black"} ml="20px">
                    {finalMatch.team2}
                  </Box>
                </Center>
              </Box>
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
      matches: [{
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
      }, {
        fase: "grupos",
        stadium: "Allianz Park",
        team1: "Portugal",
        team2: "Espanha",
        goalsTeam1: 2,
        goalsTeam2: 1,
        winner: "Portugal",
        gameDate: "06/09/2022",
      }]
    }
  };
};
