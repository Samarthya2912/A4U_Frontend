import React from 'react'
import OtherPackages from '../components/OtherPackages'
import QuizComponent from "../components/QuizComponent"
import SideNavigator from '../components/SideNavigator'
import "./QuestionsPage.css"

const QuestionsPage = () => {
  return (
    <div>
      <div className="questions-page__quiz">
        <SideNavigator />
        <QuizComponent hide_para hide_topic_list style={{ marginLeft: "100px" }} />
      </div>
      <OtherPackages />
    </div>
  )
}

export default QuestionsPage