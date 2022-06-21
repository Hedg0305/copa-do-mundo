import { API } from ".";

export interface MatchInfo {
  ano: number;
  fase: string;
  equipe1: string;
  equipe2: string;
  golsEquipe1: number;
  golsEquipe2: number;
  nomeEstadio: string;
  vencedor: string;
  dataJogo: Date;
}

interface CreateMatchResponse {
  comissaoTecnica: MatchInfo[];
  comissaoTecnicaDaEdicao: MatchInfo[];
}

export const getMatches = async (year: number) => {
  const { data } = await API.get<MatchInfo[]>(`/partidas?ano=${year}`);
  return data;
};

export const createMatch = async ({
  ano,
  equipe1,
  equipe2,
  fase,
  vencedor,
  golsEquipe1,
  golsEquipe2,
  nomeEstadio,
  dataJogo,
}: MatchInfo) => {
  const { data } = await API.post<CreateMatchResponse>("/patidas", {
    ano,
    equipe1,
    equipe2,
    fase,
    vencedor,
    golsEquipe1,
    golsEquipe2,
    nomeEstadio,
    dataJogo,
  });
  return data;
};
