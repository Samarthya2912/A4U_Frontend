import React from 'react'
import subjects from "../data/subjects"
import SubjectCard from './SubjectCard'

const SubjectCarousel = () => {
  return (
    <div className="subject-carousel">
        {
            subjects.map((sub,index) => <SubjectCard key={index} {...sub} />)
        }
    </div>
  )
}

export default SubjectCarousel