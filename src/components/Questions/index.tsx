import "./Questions.modules.scss";

//Hooks
import React from "react";
import { useContext, useState } from "react";

//Context
import { QuizContext } from "../../context/quiz";

const Questions = () => {
  const [gameStage, dispatch] = useContext(QuizContext);

  const [counter, setCounter] = useState(0);

  const [final, setFinal] = useState(false);

  const sumCounter = () => {
    if (counter < gameStage.questions.length - 1) {
      setCounter(counter + 1);
    } else {
      setFinal(true);
      setCounter(gameStage.questions.length - 1);
    }
  };

  const current_item = gameStage.questions[counter];

  console.log(final);
  console.log(counter);

  if (final) {
    console.log("mudar de estado");

    dispatch({ type: "END_GAME" });
  }

  return (
    <div className="question-div">
      <div className="question-div-bg">
        <h2>{current_item.question}</h2>
        {
          <div className="options-div">
            <ul>
              {current_item.options.map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          </div>
        }

        <button onClick={sumCounter}>Próxima pergunta</button>
      </div>
    </div>
  );
};

export default Questions;
