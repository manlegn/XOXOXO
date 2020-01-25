import React from "react";
import { createContext, useReducer } from "react";
import produce from "immer";

const INITIAL_STATE = {
  squares: new Array(9).fill(null),
  winner: false,
  player: "O"
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return produce(state, draft => {
        draft.squares[action.payload.index] = state.player;
      });
    case "TOGGLE_PLAYER":
      return produce(state, draft => {
        draft.player = state.player === "X" ? "O" : "X";
      });
    case "SET_WINNER":
      return produce(state, draft => {
        draft.winner = action.payload.player;
      });
    default: {
      return state;
    }
  }
}

export const StateContext = createContext();
export const DispatchContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Context;
