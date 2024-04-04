//React imports
import React from "react";
import ReactDOM from "react-dom/client";

//Components
import Wellcome from "./components/Wellcome/index.tsx";
import App from "./app.tsx";

//Contexto
import { QuizProvider } from "./context/quiz.tsx";

//State
import { useState } from "react";

//Estilos
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>

    <QuizProvider>
    <App /> 
    </QuizProvider>
    
    
  </React.StrictMode>
);
