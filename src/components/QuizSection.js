import React from 'react'
import { useState } from 'react'
import quiz_problems from '../data/quiz_problems'
import Button from './shared/Button';

const Problem = (props) => {
    const [marked, setMarked] = useState(1000);
    const [showSolution, setShowSolution] = useState(false);

    const wrong = "rgba(255,0,0,0.2)", right = "rgba(0,255,0,0.2)", markedColor = "rgba(0,0,255,0.1)", notMarkedColor = "white";

    const markOption = (index) => {
        if(!showSolution) setMarked(index);
    }

    const showSolutionHandler = () => {
        if(marked !== 1000) setShowSolution(true);
    }

    return (
        <div className="problem">
            <p className="problem__problem-desc">{"Q"+props.qno}. {props.question}</p>
            <div>
                {
                    props.options.map((opt, index) => {
                        return (
                            <div className="problem__option" onClick={() => { markOption(index) }} key={index} style={{
                                backgroundColor: (showSolution? (index === props.correct_option? right: (marked === index? wrong:notMarkedColor)): (marked === index? markedColor:notMarkedColor))
                            }}>
                                <input checked={index === marked} type="radio" key={index} /><span>{opt}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="problem__button-group">
                <Button onClick={ showSolutionHandler } backgroundColor="#13AE7E">Answer and Solution</Button>
                <Button backgroundColor="#5F5F5F">Join the discussion</Button>
                <Button backgroundColor="#3362AB">Save for later</Button>
            </div>
            {
                showSolution && <div className="problem__explanation" style={{
                    backgroundColor: (marked === props.correct_option? right:wrong)
                }}>
                    <h3>Explanation</h3>
                    {props.explanation}
                </div>
            }
        </div>
    )
}


const QuizSection = () => {
    return (
        <div className="quiz-section">
            {
                quiz_problems.map((problem, index) => {
                    return <Problem key={index} qno={index+1} {...problem} />
                })
            }
        </div>
    )
}

export default QuizSection

