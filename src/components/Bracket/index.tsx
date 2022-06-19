import {
  Table,
  TableCaption,
  TableContainer,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { TeamInfo } from "../../pages/[edition]/[id]/[team]";
import BracketRow from "../BracketRow";

interface BracketProps {
  group: string;
  teams: TeamInfo[];
}

const Bracket = ({ group, teams }: BracketProps) => {
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
          <BracketRow
            key={(teams[index] && teams[index]?.country) || index}
            index={index}
            id={teams[index] && teams[index]?.id}
            country={teams[index] && teams[index]?.country}
            v={teams[index] && teams[index]?.wins}
            e={teams[index] && teams[index]?.draws}
            d={teams[index] && teams[index]?.loses}
            gp={teams[index] && teams[index]?.golsPro}
            gc={teams[index] && teams[index]?.goalsAgainst}
          />
        ))}
      </Table>
    </TableContainer>
  );
};

export default Bracket;

