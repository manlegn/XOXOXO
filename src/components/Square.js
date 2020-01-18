import React from "react";
import styled from "styled-components";

const Square = styled.button`
  border: 1px solid silver;
  background: transparent;
  text-transform: uppercase;
  transition: 0.2s all;
  font-size: 20vmin;
  font-weight: bold;
  width: 33.33333%;
  height: 33.33333%;
  cursor: pointer;
  outline: 0;

  &:hover {
    background: #eee;
  }
`;

export default ({ value, onClick }) => (
  <Square onClick={onClick}>{value}</Square>
);
