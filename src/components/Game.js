import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../context";
import Board from "./Board";
import Score from "./Score";

const Game = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (orientation: portrait) {
    flex-direction: column;
  }
`;

export default ({ props }) => {
  const state = useContext(StateContext);

  return (
    <Game>
      <Board />
      <Score />
    </Game>
  );
};
