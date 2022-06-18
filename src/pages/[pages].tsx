import React from "react";
import { GetStaticProps } from "next";

const Competition = () => {
  return <div>Competition</div>;
};

export default Competition;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

