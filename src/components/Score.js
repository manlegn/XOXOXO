import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../context";

const Score = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: start;
  flex: 1;
  flex-wrap: wrap;
  box-sizing: border-box;
  line-height: 1;
  padding: 4vmin;
  font-weight: bold;
  font-size: 20vmin;
`;

export default () => {
  const state = useContext(StateContext);

  return (
    <Score>
      {state.score.map((score, i) => (
        <div key={i}>{score}</div>
      ))}
    </Score>
  );
};
