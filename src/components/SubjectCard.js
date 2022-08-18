import React from 'react'

const SubjectCard = (props) => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        margin: "10px"
    }}>
        <img src={props.image} alt="" />
        <span>{props.title}</span>
    </div>
  )
}

export default SubjectCard