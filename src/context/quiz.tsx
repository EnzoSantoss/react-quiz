import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialSate = {
  gameStage: STAGES[0],
  questions,
};

const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "END_GAME":
      return {
        gameStage: STAGES[2],
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialSate);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
