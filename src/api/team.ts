import { API } from ".";

export interface Team {
  id: number;
  pais: string;
  ano: number;
  grupo: string;
  golsPro: number;
  golsContra: number;
  saldoDeGols: number;
  numeroDeVitorias: number;
  numeroDeDerrotas: number;
  numeroDeEmpates: number;
}

export const getTeams = async (year: number) => {
  const response = await API.get<Team[]>(`/equipes?ano=${year}`);
  console.log(response);
  return response.data;
};

export const createTeam = async (pais: string, ano: number, grupo: string) => {
  const { data } = await API.post("/equipes", {
    pais,
    ano,
    grupo,
  });
  return data;
};
