import React from "react";
import { GetServerSideProps } from "next";
import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import AddMatchForm from "../../components/AddMatchForm";
import { getTeams, Team } from "../../api/team";
import { getMatches, MatchInfo } from "../../api/match";
import Match, { MatchProps } from "../../components/Match";
interface ServerSideProps {
  edition: string;
}

interface PageProps {
  year: string;
  teams: string[];
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
  gameDate: Date;
}

const Matches = ({ year, teams, matches }: PageProps) => {
  return (
    <Box h='100vh'>
      <Center>
        <VStack>
          <Heading as='h1' size='2xl' mb='10'>
            Partidas - {year}
          </Heading>
          <AddMatchForm teams={teams} />
          <Grid gridTemplateColumns='repeat(2, 1fr)' gap='20px'>
            {matches?.map((match, index) => (
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

  const allTeams = await getTeams(Number(year));
  const allMatches = await getMatches(Number(year));
  const matches = formatMatches(allMatches);
  const teams = formatTeams(allTeams);

  return {
    props: {
      year,
      teams,
      country,
      matches,
    },
  };
};

const formatTeams = (teams: Team[]) => {
  const formatedTeams = teams.map<string>((team) => team.pais);
  return formatedTeams;
};

export function formatMatches(matches: MatchInfo[]): MatchProps[] {
  return matches.map((match) => {
    return {
      year: match.ano,
      fase: match.fase,
      team1: match.equipe1,
      team2: match.equipe2,
      winner: match.vencedor,
      goalsTeam1: match.golsEquipe1,
      goalsTeam2: match.golsEquipe2,
      stadium: match.nomeEstadio,
      gameDate: match.dataJogo,
    };
  });
}
