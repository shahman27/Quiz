import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const wrong = [];
export let wrongCount = 0;
export const guess = [];

export default function Quiz() {
	const questions = [
		{
			questionText: 'The correct class of fire extinguisher to be used on a fire with an estinguisher piece of electrical equipment, would be:',
			answerOptions: [
				{ answerText: 'Class A', isCorrect: false },
				{ answerText: 'Class B', isCorrect: false },
				{ answerText: 'Class C', isCorrect: true},
				{ answerText: 'Class D', isCorrect: false},
			 ],
		  },
		  {
			questionText: 'When using a ladder against a wall, it must be placed eith the base out how many feet for every how many feet of rise?',
			answerOptions: [
				{ answerText: '½ foot out for every 3 foot rise', isCorrect: false },
				{ answerText: '1 foot out for every 3 foot rise', isCorrect: false },
				{ answerText: '½ foot out for every 4 foot rise', isCorrect: false},
				{ answerText: '1 foot out for every 4 foot rise', isCorrect: true},
			 ],
			},
			{
				questionText: 'The pressure in an oxygen tank cylinder whould not exceed:',
				answerOptions: [
					{ answerText: '1200 psi', isCorrect: false },
					{ answerText: '2200 psi', isCorrect: true },
					{ answerText: '3200 psi', isCorrect: false},
					{ answerText: '4200 psi', isCorrect: false},
				 ],
			  },
			  {
				questionText: 'The pressure in an acetylene tank cylinder whould not exceed:',
				answerOptions: [
					{ answerText: '150 psi', isCorrect: false },
					{ answerText: '250 psi', isCorrect: true },
					{ answerText: '350 psi', isCorrect: false},
					{ answerText: '450 psi', isCorrect: false},
				 ],
			  },
			  {
				questionText: 'When working on any equipment (or component thereof), with the possiblity of having potential energy sources integral or nearby, what precautions must be taken?',
				answerOptions: [
					{ answerText: 'identify all live energy and potential energy sources pertaining to the equipment', isCorrect: false },
					{ answerText: 'isolate all energy sources related to the equipment', isCorrect: false },
					{ answerText: 'lock out and tag all electrical energy sources related to the equipment', isCorrect: false},
					{ answerText: 'all of the above', isCorrect: true},
				 ],
			  },
	];

	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const navigate = useNavigate()


	//const shuffleQuestions = array => {
	//	for (let i = array.length - 1; i > 0; i--) {
	//		const j = Math.floor(Math.random() * (i + 1));
	//		const temp = array[i];
	//		array[i] = array[j];
	//		array[j] = temp;
	//	}
	//	return array;
	//};

	//shuffleQuestions(questions);

	const handleAnswerOptionClick = (isCorrect, guessIndex) => {
		if (isCorrect) {
			setScore(score + 1);
		} else {
			wrong[wrongCount] = questions[currentQuestion];
			wrongCount = wrongCount + 1;
			guess[wrongCount] = guessIndex;
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const onRestartClick = () => {
		setShowScore(false);
		setScore(0);
		setCurrentQuestion(0);
		//shuffleQuestions(questions);
		wrongCount = 0;
	}

	const toggleShowWrong = () => {
		navigate('/results')
	}
    
	return (
		<div className='quiz'>
			{showScore ? (
				<>
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
					<div className="buttons-wow">
			            <ButtonGroup className="button-group">
						<Button
							variant="primary"
							size="lg"
							active
							onClick={() => onRestartClick()}
						>
							Restart
						</Button>
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						<Button
							//class="btn btn-outline-primary"
							variant="primary"
							size="lg"
							active
							onClick={() => toggleShowWrong()}
						>
							Show Results
						</Button>
						</ButtonGroup>
          			</div>
				</>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						<button id='button1' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[0].isCorrect, 0)}>{questions[currentQuestion].answerOptions[0].answerText}</button>
						<button id='button2' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[1].isCorrect, 1)}>{questions[currentQuestion].answerOptions[1].answerText}</button>
						<button id='button3' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[2].isCorrect, 2)}>{questions[currentQuestion].answerOptions[2].answerText}</button>
						<button id='button4' onClick={() => handleAnswerOptionClick(questions[currentQuestion].answerOptions[3].isCorrect, 3)}>{questions[currentQuestion].answerOptions[3].answerText}</button>
					</div>
				</>
			)}
		</div>
	);
}


export function resetWrong () {
	wrongCount = 0;
}



