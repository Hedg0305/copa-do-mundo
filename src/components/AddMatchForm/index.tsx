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
import router from "next/router";

import React, { useState } from "react";
import { createMatch, MatchInfo } from "../../api/match";
import Matches from "../../pages/[edition]/matches";

interface Props {
  teams: string[];
}

interface AddMatchFormProps {
  updateMatches: (matches: Matches[]) => void;
}

const AddMatchForm = (
  { teams }: Props,
  { updateMatches }: AddMatchFormProps
) => {
  const [team1, setTeam1] = useState("");
  const [goalsTeam1, setGoalsTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [goalsTeam2, setGoalsTeam2] = useState("");
  const [stadium, setStadium] = useState("");
  const [gameDate, setGameDate] = useState("");
  const [winner, setWinner] = useState("");
  const [fase, setFase] = useState("");

  const fases = [
    "Grupos",
    "Oitavas",
    "Quartas",
    "Semis",
    "Final",
    "Ter. Lugar",
  ];

  const handleSubmit = async () => {
    const { edition } = router.query as any;
    const [year] = edition?.split("-");
    if (goalsTeam1 > goalsTeam2) {
      setWinner(team1);
    } else if (goalsTeam1 < goalsTeam2) {
      setWinner(team2);
    }

    if (team1 && team2 && goalsTeam1 && goalsTeam2 && stadium && gameDate) {
      const { comissaoTecnicaDaEdicao } = await createMatch({
        ano: year,
        equipe1: team1,
        equipe2: team2,
        fase: fase,
        vencedor: winner,
        golsEquipe1: Number(goalsTeam1),
        golsEquipe2: Number(goalsTeam2),
        nomeEstadio: stadium,
        dataJogo: new Date(gameDate),
      });
      const formattedMatch = formatMatch(comissaoTecnicaDaEdicao);
      updateMatches(formattedMatch);
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
          <VStack>
            <FormLabel htmlFor='fase'>Fase</FormLabel>
            <Select
              id='fase'
              value={fase}
              onChange={(e) => setFase(e.target.value)}
              w='241px'
            >
              {fases?.map((fase) => (
                <option key={fase} value={fase}>
                  {fase}
                </option>
              ))}
            </Select>
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

export function formatMatch(match: MatchInfo[]): Matches[] {
  return match.map((match) => {
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
