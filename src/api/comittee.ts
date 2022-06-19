import { API } from ".";

export interface ComicaoInfo {
  nome: string;
  idade: number;
  dataNascimento: string;
  funcao: string;
}
// "2022-06-19T19:49:54.885Z",
interface CreateComitte {
  nome: string;
  dataNascimento: Date;
  passaporte: string;
  funcao: string;
  idade: number;
  equipe: string;
  ano: 2020;
}

interface CreateCommitteeResponse {
  comissaoTecnica: ComicaoInfo[];
  comissaoTecnicaDaEdicao: ComicaoInfo[];
}

export const getCommittee = async (equipeID: string, ano: string) => {
  const { data } = await API.get<ComicaoInfo[]>(
    `/comissao-tecnica?equipeID=${equipeID}&ano=${ano}`
  );
  return data;
};

export const createComittee = async ({
  ano,
  nome,
  dataNascimento,
  passaporte,
  funcao,
  idade,
  equipe,
}: CreateComitte) => {
  const { data } = await API.post<CreateCommitteeResponse>(
    "/comissao-tecnica",
    {
      ano,
      nome,
      dataNascimento,
      passaporte,
      funcao,
      idade,
      equipe,
    }
  );

  return data;
};

