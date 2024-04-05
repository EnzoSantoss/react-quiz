import React from "react";

//Components
import Wellcome from "./components/Wellcome";
import Questions from "./components/Questions";
import Endgame from "./components/Endgame/Endgame";

//Hooks
import { useContext } from "react";

//Context
import { QuizContext } from "./context/quiz";

const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div>
      {quizState.gameStage == "Start" && <Wellcome />}
      {quizState.gameStage == "Playing" && <Questions />}
      {quizState.gameStage == "End" && <Endgame />}
    </div>
  );
};

export default App;
