import TopBanner from "../components/TopBanner";
import React from 'react'
import SubjectCarousel from "../components/SubjectCarousel";
import CollapsibleTopicList from "../components/CollapsibleTopicList";
import Problem from "../components/QuizSection";
import Button from "../components/shared/Button";
import "./Test.css"
import QuizComponent from "../components/QuizComponent";
import OtherPackages from "../components/OtherPackages";
import StarRating from "../components/shared/StarRating";


const Test = () => {
  return (
    <div>
        <TopBanner />
        <SubjectCarousel />
        <QuizComponent />
        <OtherPackages />
    </div>
  )
}

export default Test