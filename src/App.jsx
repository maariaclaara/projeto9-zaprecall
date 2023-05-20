import React from 'react';
import styled from "styled-components";
import Top from "./components/Top";
import FlashCards from "./components/FlashCards";
import Bottom from "./components/Bottom";


export default function App() {

  return (
    <ContainerMain>
      <Top />
      <FlashCards />
      <Bottom />
    </ContainerMain>
  )
};

const ContainerMain = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;