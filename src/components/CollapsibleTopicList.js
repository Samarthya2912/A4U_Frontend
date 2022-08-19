import React from 'react'
import { useState } from 'react'
import topics from '../data/topics_list'
import ChevronIcon from './ChevronIcon'

const CollapsibleTopicList = () => {
  return (
    <ul className="collapsible-topic-list">
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
    <li className="collapsible-topic-list__list-item">
      <button className="collapsible-topic-list__list-item_button" onClick={collapseHandler}><span style={{
        color: visible ? "dodgerblue" : "black",
      }}>{props.title} {props.subtopics.length ? <ChevronIcon up={visible} /> : ""}</span></button>
      <ul className="collapsible-topic-list__subtopics" style={{
        height: visible ? "auto" : "0",
      }}>
        {props.subtopics.map((subtopic, index) => {
          return <li key={index}>{subtopic}</li>
        })}
      </ul>
    </li>
  )
}


export default CollapsibleTopicList