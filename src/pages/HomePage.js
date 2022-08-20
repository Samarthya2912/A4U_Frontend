import TopBanner from "../components/TopBanner";
import React from 'react'
import SubjectCarousel from "../components/SubjectCarousel";
import "./HomePage.css"
import QuizComponent from "../components/QuizComponent";
import OtherPackages from "../components/OtherPackages";


const HomePage = () => {
  return (
    <div>
        <TopBanner />
        <SubjectCarousel />
        <QuizComponent />
        <OtherPackages />
    </div>
  )
}

export default HomePage