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

  &:nth-child(1) {
    border-width: 0 1px 1px 0;
  }
  &:nth-child(2) {
    border-width: 0 1px 1px 1px;
  }
  &:nth-child(3) {
    border-width: 0 0 1px 1px;
  }
  &:nth-child(4) {
    border-width: 1px 1px 1px 0;
  }
  &:nth-child(6) {
    border-width: 1px 0 1px 1px;
  }
  &:nth-child(7) {
    border-width: 1px 1px 0 0;
  }
  &:nth-child(8) {
    border-width: 1px 1px 0 1px;
  }
  &:nth-child(9) {
    border-width: 1px 0 0 1px;
  }
`;

export default ({ value, onClick }) => (
  <Square onClick={onClick}>{value}</Square>
);
