import React from 'react'
import { useState } from 'react'
import topics from '../data/topics_list'

const CollapsibleTopicList = () => {
  return (
    <ul style={{
      border: "solid black 1px",
      maxWidth: "20vw"
    }}>
        {topics.map((topic, index) => 
          <ListItem key={index} {...topic} default={index === 0} />
        )}
    </ul>
  )
}

const ListItem = (props) => {
  const [visible, setVisible] = useState(props.default);

  const collapseHandler = () => {
    setVisible(!visible);
  }

  return (
    <li style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }}>
        <span>{props.title}<button onClick={collapseHandler}>Click</button></span>
        <ul style={{
          height: `${visible? "auto":"0"}`,
          overflow: "hidden",
          // transition: "height 0.4s ease"
        }}>
            {props.subtopics.map((subtopic, index) => {
                return <li key={index}>{subtopic}</li>
            })}
        </ul>
    </li>
  )
}


export default CollapsibleTopicList