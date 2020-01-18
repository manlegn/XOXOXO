import React from "react";
import { createGlobalStyle } from "styled-components";
import Context from "../context";
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
    <Context>
      <Global />
      <Game />
    </Context>
  </>
);
