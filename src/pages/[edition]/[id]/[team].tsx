import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Box, Center, Grid, Heading, VStack } from "@chakra-ui/react";
import Player, { PlayerProps } from "../../../components/PlayerCard";
import TechnicalComittee, {
  ComitteeProps,
} from "../../../components/TechnicalComittee";
import AddPersonForm from "../../../components/AddPersonForm";
import { ComicaoInfo, getCommittee } from "../../../api/comittee";
import { getPlayers, JogadorInfo } from "../../../api/jogador";

interface ServerSideProps {
  edition: string;
  team: string;
  id: string;
}

interface PageProps {
  hostCountry: string;
  year: number;
  team: string;
  linha: PlayerProps[];
  goleiros: PlayerProps[];
  technicalComittee: ComitteeProps[];
  teamId: string;
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
  linha,
  goleiros,
  teamId,
}: PageProps) => {
  const [technicalComitteeList, setTechnicalComitteeList] =
    useState<ComitteeProps[]>();
  const [linhaList, setLinhaList] = useState<PlayerProps[]>();
  const [goleirosList, setGoleirosList] = useState<PlayerProps[]>();

  useEffect(() => {
    setTechnicalComitteeList(technicalComittee);
    setLinhaList(linha);
    setGoleirosList(goleiros);
  }, [technicalComittee, linha, goleiros]);

  async function upDatePlayers() {
    const { goleiros, jogadoresLinha } = await getPlayers(teamId, String(year));

    setGoleirosList(formatPlayers(goleiros));
    setLinhaList(formatPlayers(jogadoresLinha));
  }

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

          <AddPersonForm
            upDateComittee={setTechnicalComitteeList}
            upDatePlayers={upDatePlayers}
          />

          <Heading as='h3' size='md'>
            Jogadores
          </Heading>
          <Grid templateColumns='repeat(2, 1fr)' gap='35px'>
            {goleirosList?.map((player) => (
              <Player
                key={player.name + player.birthdate}
                birthdate={player.birthdate}
                name={player.name}
                age={player.age}
                position={player.position}
                stats={player.stats}
              />
            ))}

            {linhaList?.map((player) => (
              <Player
                key={player.name + player.birthdate}
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

  const { goleiros, jogadoresLinha } = await getPlayers(teamId, year);

  const linha = formatPlayers(jogadoresLinha);
  const goleirosFormatted = formatPlayers(goleiros);

  return {
    props: {
      year,
      hostCountry,
      team,
      technicalComittee: formattedComittee,
      linha,
      goleiros: goleirosFormatted,
      teamId,
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

const formatPlayers = (jogadores: JogadorInfo[]): PlayerProps[] => {
  return jogadores.map((jogador) => {
    return {
      birthdate: jogador.dataNascimento,
      name: jogador.nome,
      age: jogador.idade,
      position: jogador?.posicao ?? "GOL",
      stats: {
        goals: jogador?.gols ?? null,
        assists: jogador?.assistencias ?? null,
        sufferedGoals: jogador?.golsSofridos ?? null,
        defenses: jogador?.defesas ?? null,
        yellowCards: jogador?.cartoesAmarelos ?? null,
        redCards: jogador?.cartoesVermelhos ?? null,
      },
    };
  });
};

