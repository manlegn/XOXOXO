import React from "react";
import styled from "styled-components";

const Square = styled.button`
  background: transparent;
  border: 1px solid silver;
  font-size: 20vmin;
  width: 33.33333%;
  height: 33.33333vh;
  cursor: pointer;
  outline: 0;

  &:hover {
    background: #ddd;
  }
`;

export default ({ value, onClick }) => (
  <Square onClick={onClick}>{value}</Square>
);
