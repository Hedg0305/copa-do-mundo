import { Tbody, Tr, Td } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface BracketRowProps {
  country?: string;
  gp?: number;
  gc?: number;
  v?: number;
  d?: number;
  e?: number;
  index: number;
}

const BracketRow = ({ index, country }: BracketRowProps) => {
  const router = useRouter();

  return (
    <Link href={`${router.asPath}/${country}`}>
      <Tbody
        bgColor={index % 2 == 0 ? "gray.100" : "gray.200"}
        borderLeft={index < 2 ? "2px" : "2px"}
        borderLeftColor={index < 2 ? "green.400" : "red.400"}
        _hover={{ bgColor: "gray.300" }}
        borderBottom={index == 1 ? "2px" : "0px"}
        borderBottomStyle={index == 1 ? "dashed" : "dashed"}
        borderBottomColor={index == 1 ? "gray.400" : ""}
      >
        <Tr>
          <Td>{index + 1}</Td>
          <Td>{country}</Td>
          <Td>40</Td>
          <Td>1</Td>
          <Td>50</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
      </Tbody>
    </Link>
  );
};

export default BracketRow;

