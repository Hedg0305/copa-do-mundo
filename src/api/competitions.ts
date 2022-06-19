import { API } from ".";

export interface Competicao {
  id: string;
  ano: number;
  paisSede: string;
}

export interface CreateCompeticao {
  competicao: Competicao;
  competicoes: Competicao[];
}

export const createCompetition = async (
  paisSede: string,
  ano: number
): Promise<CreateCompeticao> => {
  const { data } = await API.post<CreateCompeticao>("/competicao", {
    paisSede,
    ano,
  });
  return data;
};

export const getCompetitions = async (): Promise<Competicao[]> => {
  const { data } = await API.get("/competicao");
  return data;
};

