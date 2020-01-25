import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { StateContext } from "../context";
import { DispatchContext } from "../context";
import Square from "./Square";
import { calculateWinner } from "../utils";

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100vmin;
  transition: 0.4s all;
  position: relative;
  overflow: hidden;
  height: 100vmin;
  pointer-events: ${props => (props.winner ? "none" : "all")};
`;

const Winner = styled.div`
  text-transform: uppercase;
  font-size: ${({ winner }) => (winner ? "100vmin" : "0")};
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s all;
`;

export default () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleClick = index => {
    if (state.squares[index])
      // TODO: shake square
      return;

    dispatch({ type: "ADD_TOKEN", payload: { index } });
  };

  useEffect(() => {
    const { squares, player } = state;
    const winner = calculateWinner(squares);

    if (winner) {
      dispatch({ type: "SET_WINNER", payload: { player } });
    } else {
      dispatch({ type: "TOGGLE_PLAYER" });
    }
  }, [state.squares]);

  return (
    <Board winner={state.winner}>
      {state.squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClick={() => handleClick(i)}
          winner={state.winner}
        />
      ))}

      <Winner winner={state.winner}>{state.winner}</Winner>
    </Board>
  );
};
