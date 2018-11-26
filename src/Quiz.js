import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

const Quiz = () => {
    const [quizPosition, setQuizPosition] = useState(1);

    const isQuizEnd = (quizPosition-1) === quizData.quiz_questions.length;

    return (
        <div>
            { isQuizEnd === true ? <QuizEnd resetClickHandler={() => setQuizPosition(1)}/>
                : <QuizQuestion quiz_question={quizData.quiz_questions[quizPosition - 1]}
                    showNextQuestionHandler={() => setQuizPosition(quizPosition+1)}/>
            }
        </div>
    );
}

export default Quiz;