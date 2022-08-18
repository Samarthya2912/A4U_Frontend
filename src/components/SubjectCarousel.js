import React from 'react'
import subjects from "../data/subjects"
import SubjectCard from './SubjectCard'

const SubjectCarousel = () => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
        width: "87vw",
        margin: "5vw"
    }}>
        {
            subjects.map((sub,index) => <SubjectCard key={index} {...sub} />)
        }
    </div>
  )
}

export default SubjectCarousel