import { API } from ".";

export interface JogadorInfo {
  id: number;
  equipeId: number;
  passaporte: number;
  nome: string;
  idade: number;
  dataNascimento: Date;
  defesas?: number;
  golsSofridos?: number;
  gols?: number;
  posicao?: string;
  assistencias?: number;
  cartoesAmarelos: number;
  cartoesVermelhos: number;
  ano: number;
}

interface CreatePlayer {
  nome: string;
  dataNascimento: Date;
  passaporte: string;
  posicao: string;
  ano: 2020;
  equipeId: string;
}

interface GetJogadoresResponse {
  goleiros: JogadorInfo[];
  jogadoresLinha: JogadorInfo[];
}

export const getPlayers = async (equipeID: string, ano: string) => {
  const { data: goleiros } = await API.get(
    `/goleiros?equipeID=${equipeID}&ano=${ano}`
  );
  const { data: jogadoresLinha } = await API.get(
    `/jogadores-linha?equipeID=${equipeID}&ano=${ano}`
  );
  //add an object call goleiros to jogadores
  const jogadores = {
    goleiros,
    jogadoresLinha,
  };

  return jogadores as GetJogadoresResponse;
};

export const createPlayer = async ({
  ano,
  nome,
  dataNascimento,
  passaporte,
  posicao,
  equipeId,
}: CreatePlayer) => {
  // calculate idade
  const idade = new Date().getFullYear() - dataNascimento.getFullYear();

  posicao !== "GOL"
    ? await API.post("/jogadores-linha", {
        ano: Number(ano),
        nome,
        dataNascimento,
        passaporte,
        posicao,
        idade,
        equipe: equipeId,
      })
    : await API.post("/goleiros", {
        ano: Number(ano),
        nome,
        dataNascimento,
        passaporte,
        idade,
        equipe: equipeId,
      });
};

export const deletePlayer = async (id: number, position: string) => {
  console.log(position);
  console.log(id);

  position !== "GOL"
    ? await API.delete(`/jogadores-linha/${id}`)
    : await API.delete(`/goleiros/${id}`);
};

