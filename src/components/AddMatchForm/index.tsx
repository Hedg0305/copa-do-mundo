import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import router from "next/router";
import React, { useState } from "react";
import { getTeams, Team } from "../../api/team";
import { TeamInfo } from "../../pages/[edition]/[id]/[team]";

interface ServerSideProps {
  edition: string;
}

interface PageProps {
  teams: string[];
}

const AddMatchForm = ({ teams }: PageProps) => {
  const [team1, setTeam1] = useState("");
  const [goalsTeam1, setGoalsTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [goalsTeam2, setGoalsTeam2] = useState("");
  const [stadium, setStadium] = useState("");
  const [gameDate, setGameDate] = useState("");
  // const allTeams = async () => await getTeams(2022);
  // allTeams().then((resp) => {});

  const handleSubmit = () => {
    if (team1 && team2 && goalsTeam1 && goalsTeam2) {
    }
  };

  return (
    <FormControl gap='20px' maxWidth='800px'>
      <VStack display='flex' alignItems='flex-end'>
        <HStack mb='30px'>
          <Box>
            <FormLabel htmlFor='team1'>Equipe 1</FormLabel>
            <Select
              id='team1'
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              w='241px'
            >
              {teams?.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Input
              maxWidth='45px'
              id='goalsTeam1'
              type='number'
              value={goalsTeam1}
              onChange={(e) => setGoalsTeam1(e.target.value)}
            />
          </Box>
          <Box>X</Box>
          <Box>
            <Input
              maxWidth='45px'
              id='goalsTeam2'
              type='number'
              value={goalsTeam2}
              onChange={(e) => setGoalsTeam2(e.target.value)}
            />
          </Box>
          <Box>
            <FormLabel htmlFor='team1'>Equipe 1</FormLabel>
            <Select
              id='team1'
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
              w='241px'
            >
              {teams?.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </Select>
          </Box>
        </HStack>
        <HStack>
          <VStack>
            <FormLabel htmlFor='stadium'>Estádio</FormLabel>
            <Box>
              <Input
                id='stadium'
                type='stadium'
                value={stadium}
                onChange={(e) => setStadium(e.target.value)}
              />
            </Box>
          </VStack>
          <VStack>
            <FormLabel htmlFor='gameDate'>Data do jogo</FormLabel>
            <Input
              id='gameDate'
              type='date'
              value={gameDate}
              onChange={(e) => setGameDate(e.target.value)}
            />
          </VStack>
        </HStack>
        <Button colorScheme='teal' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </FormControl>
  );
};

export default AddMatchForm;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const { edition } = params as unknown as ServerSideProps;
  // console.log(edition);
  // const [year, country] = edition.split("-");
  // console.log(year);

  const allTeams = await getTeams(2022);
  const teams = formatTeams(allTeams);

  return {
    props: {
      teams,
    },
  };
};

const formatTeams = (teams: Team[]) => {
  const formatedTeams = teams.map<string>((team) => team.pais);
  return formatedTeams;
};
