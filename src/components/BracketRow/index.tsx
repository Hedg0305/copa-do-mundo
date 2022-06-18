import { Tbody, Tr, Td } from "@chakra-ui/react";
import React from "react";

interface BracketRowProps {
  country?: string;
  gp?: number;
  gc?: number;
  v?: number;
  d?: number;
  e?: number;
  index: number;
}

const BracketRow = ({ index }: BracketRowProps) => {
  return (
    <Tbody
      bgColor={index % 2 == 0 ? "gray.100" : "gray.200"}
      borderLeft={index < 2 ? "2px" : "0px"}
      borderLeftColor={index < 2 ? "green.400" : ""}
      _hover={{ bgColor: "gray.300" }}
      borderBottom={index == 1 ? "2px" : "0px"}
      borderBottomStyle={index == 1 ? "dashed" : "dashed"}
      borderBottomColor={index == 1 ? "gray.400" : ""}
    >
      <Tr>
        <Td>{index + 1}</Td>
        <Td>Brasil</Td>
        <Td>40</Td>
        <Td>1</Td>
        <Td>50</Td>
        <Td>0</Td>
        <Td>0</Td>
      </Tr>
    </Tbody>
  );
};

export default BracketRow;

