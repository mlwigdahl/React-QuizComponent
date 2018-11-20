import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    render() {
        const quiz_question = this.props.quiz_question;
        return (
            <main>
                <section>
                    <p>{quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((v, i)=>{
                            return <QuizQuestionButton key={i} button_text={v} clickHandler={this.handleClick.bind(this)}/>;
                        })}
                    </ul>
                </section>
            </main>
        );
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }
};

export default QuizQuestion;