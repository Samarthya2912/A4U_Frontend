import React from 'react'
import { Link } from 'react-router-dom'
import subjects from "../data/subjects"
import SubjectCard from './SubjectCard'

const SubjectCarousel = () => {
  return (
    <div className="subject-carousel">
        {
            subjects.map((sub,index) => <Link to={`${sub}/problems`}><SubjectCard key={index} {...sub} /></Link>)
        }
    </div>
  )
}

export default SubjectCarousel