import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import Messages from "./Components/Messages";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  background-color: #ededed;
  width: 100vw;
`;

function App() {
  render();
  return (
    <MainContainer>
      <Messages />
    </MainContainer>
  );
}

export default App;