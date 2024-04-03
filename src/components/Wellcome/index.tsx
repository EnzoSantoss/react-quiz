//Hooks
import { useContext } from "react"; 
import { QuizContext } from "../../context/quiz";

//Imagem
import Quiz from "../../img/quiz.svg"
//Estilos
import "./Wellcome.modules.scss";
export default function Wellcome() {

  const quizState = useContext(QuizContext)

  console.log(quizState)

  return (
    <div className="wellcome-div">

      <div className="wellcome-text-div">
      <h2>Seja Bem vindo</h2>
      <p>Clique no botão para inciar o quiz</p>
      <button>INICIAR</button>
      </div>
      

      <div className="wellcome-img">
      <img src={Quiz} alt="Inicio do quiz" />
      </div>
    </div>
  );
}


