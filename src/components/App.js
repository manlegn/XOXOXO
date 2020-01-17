import React from "react";
import { createGlobalStyle } from "styled-components";
import Game from "./Game";

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0
  }

  body {
    font-family: sans-serif;
  }
`;

export default () => (
  <>
    <Global />
    <Game />
  </>
);
