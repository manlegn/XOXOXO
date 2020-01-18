import React from "react";
import { createContext, useReducer } from "react";
import produce from "immer";

const INITIAL_STATE = {
  squares: new Array(9).fill(null),
  currentPlayer: "X"
};

export function reducer(state, action) {
  switch (action.type) {
    case "PLAYER_TURN":
      if (state.squares[action.payload.index]) return state;

      return produce(state, draft => {
        draft.squares[action.payload.index] = state.currentPlayer;
        draft.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
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
