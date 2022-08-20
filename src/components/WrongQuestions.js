import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { wrong, wrongCount, guess } from './Quiz'
import { useState } from 'react'
import { resetWrong } from './Quiz'


export default function WrongQuestions() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion === wrongCount) {
      resetWrong();
      navigate("/")
		} else {
      setCurrentQuestion(nextQuestion);
    }
  }

    return (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{wrongCount}
              </div>
              <div className='question-text'>{wrong[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {wrong[currentQuestion].answerOptions.map((answerOption) => (
                answerOption.isCorrect ? 
                  <resultsButton style={{backgroundColor: 'green'}}>{answerOption.answerText}</resultsButton>
                :
                  <resultsButton>{answerOption.answerText}</resultsButton>            
              ))}
            &nbsp; &nbsp;
            </div>
              { currentQuestion === (wrongCount - 1) ?
                <Button class="mt-1" onClick={() => handleNext()}> Finish </Button>
              :
                <Button class="mt-1" onClick={() => handleNext()}> Next </Button>
              }
          </>
    )
}
