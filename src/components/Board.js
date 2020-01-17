import React from "react";
import styled from "styled-components";
import Square from "./Square";

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100vmin;
`;

export default props => {
  const handleClick = () => {};

  return (
    <Board>
      {new Array(9).fill(null).map((value, i) => (
        <Square value={value} onClick={handleClick} />
      ))}
    </Board>
  );
};
