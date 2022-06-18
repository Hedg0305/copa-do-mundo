import {
  FormControl,
  Box,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ComitteeForm from "../ComitteeForm";

const PlayerForm = () => {
  const [passport, setPassport] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [defenses, setDefenses] = useState(0);
  const [sufferedGoals, setSufferedGoals] = useState(0);
  const [goals, setGoals] = useState(0);
  const [assists, setAssists] = useState(0);
  const [yellowCards, setYellowCards] = useState(0);
  const [redCards, setRedCards] = useState(0);

  const handleSubmit = () => {
    console.log("Passport: ", passport);
    console.log("Birthdate: ", birthdate);
    console.log("Name: ", name);
    console.log("Position: ", position);
    console.log("Defenses: ", defenses);
    console.log("SufferedGoals: ", sufferedGoals);
    console.log("Goals: ", goals);
    console.log("Assists: ", assists);
    console.log("YellowCards: ", yellowCards);
    console.log("RedCards: ", redCards);
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
              onChange={() => setName(name)}
            />
          </Box>
          <Box>
            <FormLabel htmlFor='passport'>Passaporte</FormLabel>
            <Input
              id='passport'
              type='passport'
              value={passport}
              onChange={() => setPassport(passport)}
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
              type='birthdate'
              value={birthdate}
              onChange={() => setBirthdate(birthdate)}
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

const positions = [
  "Goleiro",
  "Zagueiro",
  "Lateral Direito",
  "Lateral Esquerdo",
  "Meio-Campo",
  "Atacante",
  "Volante",
];

