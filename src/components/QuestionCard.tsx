import React from 'react';
//Types
import { AnswerObject } from '../App';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => {
  return (
    <div className='questionsContainer'>
        <p className='number'>Question: {questionNr} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>{answers.map(answer => (
            <div key={answer} className="answersBtnContainer">
                <button className='answerBtn' disabled={!!userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
            </div>
        ))}</div>
    </div>
  )
}

export default QuestionCard