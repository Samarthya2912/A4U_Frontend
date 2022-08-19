import React from 'react'
import { useState } from 'react'
import quiz_problems from '../data/quiz_problems'

const Problem = (props) => {
    const [marked, setMarked] = useState(1000);

    return (
        <div>
            <p style={{ display: "flex", alignItems: "flex-start" }}>{props.question}</p>
            <div>
                {
                    props.options.map((opt, index) => {
                        return (
                        <div key={index} style={{
                            display: "flex", alignItems: "flex-start"
                        }}>
                            <input onClick={() => { setMarked(index) }} checked={index === marked} type="radio" key={index} /><span>{opt}</span>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}


const QuizSection = () => {
    return (
        <div>
            {
                quiz_problems.map((problem, index) => {
                    return <Problem key={index} {...problem} />
                })
            }
        </div>
    )
}

export default QuizSection

