import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../context";
import { DispatchContext } from "../context";
import Square from "./Square";

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100vmin;
  height: 100vmin;
`;

export default () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleClick = index => {
    dispatch({ type: "PLAYER_TURN", payload: { index } });
  };

  return (
    <Board>
      {state.squares.map((value, i) => (
        <Square key={i} value={value} onClick={() => handleClick(i)} />
      ))}
    </Board>
  );
};
