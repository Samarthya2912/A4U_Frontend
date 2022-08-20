import React from 'react'
import CollapsibleTopicList from './CollapsibleTopicList'
import QuizSection from './QuizSection'

const QuizComponent = (props) => {
    return (
        <div className="quiz-component-wrapper" style={props.style}>
            <hr />
            {props.hide_para || <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis velit iste natus ipsa exercitationem cumque asperiores commodi nostrum, nemo nulla consequatur at? Nemo necessitatibus quod totam? Iure officiis temporibus neque, beatae optio expedita accusantium at! Voluptatem, voluptatibus ex similique dolores aliquid non, sint deleniti distinctio blanditiis cumque odio debitis officiis!</p>}
            <div className="quiz-component">
                {props.hide_topic_list || <CollapsibleTopicList />}
                <QuizSection />
            </div>
        </div>
    )
}

export default QuizComponent