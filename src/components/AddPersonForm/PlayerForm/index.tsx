import {
  FormControl,
  Box,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { createPlayer } from "../../../api/jogador";

interface PlayerFormProps {
  upDatePlayers: () => void;
}

const PlayerForm = ({ upDatePlayers }: PlayerFormProps) => {
  const [passport, setPassport] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    const { edition, id } = router.query as any;
    const [year] = edition?.split("-");
    console.log(id);

    if (passport && name && birthdate && position) {
      createPlayer({
        ano: year,
        dataNascimento: new Date(birthdate),
        equipeId: id,
        nome: name,
        passaporte: passport,
        posicao: position,
      });
      upDatePlayers();
    }
  };

  return (
    <FormControl gap='20px' maxWidth='800px'>
      <HStack display='flex' alignItems='flex-end'>
        <VStack>
          <Box>
            <FormLabel htmlFor='name'>Nome</FormLabel>
            <Input
              id='name'
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box>
            <FormLabel htmlFor='passport'>Passaporte</FormLabel>
            <Input
              id='passport'
              type='passport'
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
          </Box>
        </VStack>
        <VStack>
          <Box>
            <FormLabel htmlFor='position'>Posição</FormLabel>
            <Select
              id='position'
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              w='241px'
            >
              {positions.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <FormLabel htmlFor='birthdate'>Data de nascimento</FormLabel>
            <Input
              id='birthdate'
              type='date'
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Box>
        </VStack>

        <Button colorScheme='teal' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </HStack>
    </FormControl>
  );
};

export default PlayerForm;

const positions = ["PE", "ZAG", "LE", "LD", "MC", "ATAC", "VOL", "GOL"];

