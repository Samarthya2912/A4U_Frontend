import React from 'react'
import { Link } from 'react-router-dom'
import subjects from "../data/subjects"
import SubjectCard from './SubjectCard'

const SubjectCarousel = () => {
  return (
    <div className="subject-carousel">
        {
            subjects.map((sub,index) => <Link key={index} to={`${sub.title}/problems`}><SubjectCard {...sub} /></Link>)
        }
    </div>
  )
}

export default SubjectCarousel