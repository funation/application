import React, {useState} from 'react';
import ExampleForKakao from "./components/ExampleForKakao";
import styled from "styled-components/native";

const AppWrapper = styled.View`
  width:100%;
  height:100%;
  background:black;
`;

const App = () => {
  return(
    <AppWrapper>
      <ExampleForKakao />
    </AppWrapper>
  );
};

export default App;