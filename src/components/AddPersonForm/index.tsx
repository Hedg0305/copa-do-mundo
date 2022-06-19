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
import ComitteeForm from "./ComitteeForm/index";
import PlayerForm from "./PlayerForm";

const AddPersonForm = () => {
  return (
    <Tabs isFitted variant='solid-rounded'>
      <TabList mb='1em'>
        <Tab>Comissão técnica</Tab>
        <Tab>Jogador</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ComitteeForm />
        </TabPanel>
        <TabPanel>
          <PlayerForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AddPersonForm;

