import React from 'react'

const SubjectCard = (props) => {
  return (
    <div className="subject-card">
        <img src={props.image} alt="" />
        <span className="subject-card__title">{props.title}</span>
    </div>
  )
}

export default SubjectCard