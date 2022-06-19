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

const BracketRow = ({ index, country, d, e, gc, gp, v }: BracketRowProps) => {
  const router = useRouter();

  return (
    <Link href={country ? `${router.asPath}/${country}` : "#"}>
      <Tbody
        bgColor={index % 2 == 0 ? "gray.100" : "gray.200"}
        borderLeft='2px'
        borderLeftColor={index < 2 ? "green.400" : "red.400"}
        _hover={{ bgColor: "gray.300" }}
        borderBottom={index == 1 ? "2px" : "0px"}
        borderBottomStyle='dashed'
        borderBottomColor={index == 1 ? "gray.400" : ""}
        transition='0.2s'
      >
        <Tr>
          <Td>{index + 1}</Td>
          <Td>{country ? country : "---"}</Td>
          <Td>{v ?? "-"}</Td>
          <Td>{d ?? "-"}</Td>
          <Td>{e ?? "-"}</Td>
          <Td>{gp ?? "-"}</Td>
          <Td>{gc ?? "-"}</Td>
        </Tr>
      </Tbody>
    </Link>
  );
};

export default BracketRow;
