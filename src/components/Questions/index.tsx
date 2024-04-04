import React from 'react'

//Hooks
import { useContext,useState } from 'react'


//Context
import { QuizContext } from '../../context/quiz'

const Questions = () => {

  const [gameStage, dispatch] = useContext(QuizContext)


  const current_item = gameStage.questions[0]
  
  console.log(gameStage)
  console.log(current_item)

  return (
    <div className='question-div'>
      <h2>{current_item.question}</h2> 

      {<div className='options-div'>
        <ul>
          {current_item.options.map((e,index)=>{ return <li key={index}>{e}</li>}) }
        </ul>
      </div> }

      <button>Próxima pergunta</button>
    </div>
  )
}

export default Questions