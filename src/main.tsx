import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Wellcome from "./components/Wellcome/index.tsx";
import { QuizProvider } from "./context/quiz.tsx";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <QuizProvider>
    <Wellcome />
    </QuizProvider>
    
    
  </React.StrictMode>
);
