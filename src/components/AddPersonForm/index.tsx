import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ComitteeProps } from "../TechnicalComittee";
import ComitteeForm from "./ComitteeForm/index";
import PlayerForm from "./PlayerForm";

interface AddPersonFormProps {
  upDateComittee: (comittee: ComitteeProps[]) => void;
}

const AddPersonForm = ({ upDateComittee }: AddPersonFormProps) => {
  return (
    <Tabs isFitted variant='solid-rounded'>
      <TabList mb='1em'>
        <Tab>Comissão técnica</Tab>
        <Tab>Jogador</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ComitteeForm upDateComittee={upDateComittee} />
        </TabPanel>
        <TabPanel>
          <PlayerForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AddPersonForm;

