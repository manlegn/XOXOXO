import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { StateContext } from "../context";
import { DispatchContext } from "../context";
import Square from "./Square";
import { calculateWinner } from "../utils";

const Board = styled.div`
  flex: 0 1 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 4vmin;
  max-width: 100vmin;
  transition: 0.4s all;
  height: 100vmin;
  pointer-events: ${props => (props.winner ? "none" : "all")};
`;

const Winner = styled.a`
  font-size: ${({ winner }) => (winner ? "100vmin" : "0")};
  font-weight: bold;
  position: absolute;
  left: 50vmin;
  top: 50vmin;
  transform: translate(-50%, -50%);
  transition: 0.2s all;
  cursor: pointer;
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

  const newGame = () => {
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    const { squares, player } = state;
    const winner = calculateWinner(squares);
    const draw = !squares.includes(null);

    if (winner) {
      dispatch({ type: "SET_WINNER", payload: { player } });
    } else {
      dispatch({ type: "TOGGLE_PLAYER" });
    }

    if (draw) {
      dispatch({ type: "RESET" });
    }
  }, [state.squares]);

  return (
    <>
      <Board winner={state.winner}>
        {state.squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onClick={() => handleClick(i)}
            winner={state.winner}
          />
        ))}
      </Board>
      <Winner winner={state.winner} onClick={() => newGame()}>
        {state.winner}
      </Winner>
    </>
  );
};
