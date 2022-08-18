import React from 'react'
import { useState } from 'react'
import topics from '../data/topics_list'
import ChevronIcon from './ChevronIcon'

const CollapsibleTopicList = () => {
  return (
    <ul style={{
      border: "solid black 1px",
      maxWidth: "20vw",
      fontSize: "xx-large",
      fontFamily: "Roboto"
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
      alignItems: "flex-start",
      margin: "10px 0"
    }}>
      <button style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "large"
      }} onClick={collapseHandler}><span style={{
        color: visible ? "dodgerblue" : "black",
      }}>{props.title} {props.subtopics.length ? <ChevronIcon up={visible} /> : ""}</span></button>
      <ul style={{
        height: visible ? "auto" : "0",
        overflow: "hidden",
        fontSize: "large"
      }}>
        {props.subtopics.map((subtopic, index) => {
          return <li key={index}>{subtopic}</li>
        })}
      </ul>
    </li>
  )
}


export default CollapsibleTopicList