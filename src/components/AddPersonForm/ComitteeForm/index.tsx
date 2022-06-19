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
import { createComittee } from "../../../api/comittee";
import { formatComittee } from "../../../pages/[edition]/[id]/[team]";
import { ComitteeProps } from "../../TechnicalComittee";

interface AddComitteeFormProps {
  upDateComittee: (comittee: ComitteeProps[]) => void;
}

const ComitteeForm = ({ upDateComittee }: AddComitteeFormProps) => {
  const [passport, setPassport] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const { edition, id } = router.query as any;
    const [year] = edition?.split("-");

    if (passport && name && birthdate && role) {
      const { comissaoTecnicaDaEdicao } = await createComittee({
        nome: name,
        dataNascimento: new Date(birthdate),
        passaporte: passport,
        funcao: role,
        idade: parseInt(year) - parseInt(birthdate.split("-")[0]),
        equipe: id,
        ano: year,
      });
      const formattedComittee = formatComittee(comissaoTecnicaDaEdicao);
      upDateComittee(formattedComittee);
    }
  };

  return (
    <FormControl gap='20px'>
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
            <FormLabel htmlFor='birthdate'>Data de nascimento</FormLabel>
            <Input
              id='birthdate'
              type='date'
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </Box>
          <Box>
            <FormLabel htmlFor='role'>Cargo</FormLabel>
            <Input
              id='role'
              type='role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
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

export default ComitteeForm;

