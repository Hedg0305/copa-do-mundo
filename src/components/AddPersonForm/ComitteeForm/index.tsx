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
import React, { useState } from "react";

const ComitteeForm = () => {
  const [passport, setPassport] = useState("");
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    console.log("Passport: ", passport);
    console.log("Name: ", name);
    console.log("Birthdate: ", birthdate);
    console.log("Role: ", role);
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
            <FormLabel htmlFor='birthdate'>Data de nascimento</FormLabel>
            <Input
              id='birthdate'
              type='birthdate'
              value={birthdate}
              onChange={() => setBirthdate(birthdate)}
            />
          </Box>
          <Box>
            <FormLabel htmlFor='role'>Cargo</FormLabel>
            <Input
              id='role'
              type='role'
              value={role}
              onChange={() => setRole(role)}
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

