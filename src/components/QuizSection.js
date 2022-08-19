import { maxWidth } from '@mui/system';
import React from 'react'
import { useState } from 'react'
import quiz_problems from '../data/quiz_problems'
import Button from './shared/Button';

const Problem = (props) => {
    const [marked, setMarked] = useState(1000);
    const [showSolution, setShowSolution] = useState(false);

    const wrong = "rgba(255,0,0,0.2)", right = "rgba(0,255,0,0.2)", markedColor = "rgba(0,0,255,0.1)", notMarkedColor = "white";

    return (
        <div>
            <p style={{ display: "flex", alignItems: "flex-start" }}>{"Q"+props.qno}. {props.question}</p>
            <div>
                {
                    props.options.map((opt, index) => {
                        return (
                            <div onClick={() => { setMarked(index) }} key={index} style={{
                                display: "flex", alignItems: "flex-start",
                                border: "solid black 1px",
                                padding: "17px",
                                margin: "5px 0",
                                borderRadius: "5px",
                                cursor: "pointer",
                                backgroundColor: (showSolution && index === marked ? (marked === props.correct_option ? right : wrong) : (marked === index? markedColor:notMarkedColor))
                            }}>
                                <input checked={index === marked} type="radio" key={index} /><span>{opt}</span>
                            </div>)
                    })
                }
            </div>
            <div style={{
                display: "flex", justifyContent: "center"
            }}>
                <Button onClick={() => setShowSolution(true)}>Show Solution</Button>
                <Button>Join the discussion</Button>
                <Button>Save for later</Button>
            </div>
            {
                showSolution && <div style={{
                    border: "solid black 1px",
                    padding: "10px",
                    borderRadius: "5px",
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
        <div style={{
            maxWidth: "60vw",
            fontWeight: "bold"
        }}>
            {
                quiz_problems.map((problem, index) => {
                    return <Problem key={index} qno={index+1} {...problem} />
                })
            }
        </div>
    )
}

export default QuizSection

