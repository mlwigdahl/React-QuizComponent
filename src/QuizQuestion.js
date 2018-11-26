import React, { useState } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

const QuizQuestion = ({quiz_question, showNextQuestionHandler}) => {
    const [incorrectAnswer, setIncorrectAnswer] = useState(false);

    const handleClick = (buttonText) => {
        if (buttonText === quiz_question.answer) {
            setIncorrectAnswer(false);
            showNextQuestionHandler();
        }
        else {
            setIncorrectAnswer(true);
        }
    };

    return (
        <main>
            <section>
                <p>{quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
                <ul>
                    {quiz_question.answer_options.map((v, i)=>{
                        return <QuizQuestionButton key={i} button_text={v} clickHandler={handleClick}/>;
                    })}
                </ul>
            </section>
            { incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null }
        </main>
    );
}

export default QuizQuestion;