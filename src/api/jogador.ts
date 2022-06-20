import { API } from ".";

export interface JogadorInfo {
  nome: string;
  idade: number;
  dataNascimento: string;
  posicao: string;
}

interface CreateJogador {
  nome: string;
  dataNascimento: Date;
  passaporte: string;
  posicao: string;
  idade: number;
  equipe: string;
  ano: 2020;
}

// interface CreateCommitteeResponse {
//   goleiro: ComicaoInfo[];
//   goleirosDaEdicao: ComicaoInfo[];
// }

export const getPlayer = async (
  equipeID: string,
  ano: string,
  posicao: string
) => {
  const { data } = await API.get(
    `/comissao-tecnica?equipeID=${equipeID}&ano=${ano}`
  );
  return data;
};

// export const createComittee = async ({
//   ano,
//   nome,
//   dataNascimento,
//   passaporte,
//   funcao,
//   idade,
//   equipe,
// }: CreateComitte) => {
//   const { data } = await API.post(
//     "/comissao-tecnica",
//     {
//       ano,
//       nome,
//       dataNascimento,
//       passaporte,
//       funcao,
//       idade,
//       equipe,
//     }
//   );

//   return data;
// };
