import {
  Table,
  TableCaption,
  TableContainer,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import BracketRow from "../BracketRow";

interface BracketProps {
  group: string;
}

const Bracket = ({ group }: BracketProps) => {
  return (
    <TableContainer>
      {group}
      <Table
        variant='unstyled'
        borderWidth='1px'
        borderColor='gray.400'
        cursor='unset'
      >
        <Thead bgColor='gray.200'>
          <Tr>
            <Th borderWidth='1px' borderColor='gray.400' textAlign='center'>
              #
            </Th>
            <Th borderWidth='1px' borderColor='gray.400' textAlign='center'>
              Pais
            </Th>
            <Th borderWidth='1px' borderColor='gray.400' textAlign='center'>
              V
            </Th>
            <Th borderWidth='1px' borderColor='gray.400' textAlign='center'>
              D
            </Th>
            <Th borderWidth='1px' borderColor='gray.400' textAlign='center'>
              E
            </Th>
            <Th borderWidth='1px' borderColor='gray.400' textAlign='center'>
              GP
            </Th>
            <Th borderWidth='1px' borderColor='gray.400' textAlign='center'>
              GC
            </Th>
          </Tr>
        </Thead>
        {[1, 2, 3, 4].map((i, index) => (
          <BracketRow key={i} index={index} country='Argentina' />
        ))}
      </Table>
    </TableContainer>
  );
};

export default Bracket;

