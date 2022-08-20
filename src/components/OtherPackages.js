import Button from "../components/shared/Button"
import React from 'react'
import other_packages from '../data/other_packages'
import Check from './shared/Check'
import StarRating from './shared/StarRating'
import { useState } from "react"

const Slider = (props) => {
  const prevSlide = () => {
    let newindex = (props.showIndex - 1) % (props.other_packages.length);
    if (newindex < 0) newindex += props.other_packages.length;

    props.setShowIndex(newindex);
  }

  const nextSlide = () => {
    props.setShowIndex((props.showIndex + 1) % (props.other_packages.length));
  }

  return <div className="slider">
    <button onClick={prevSlide} className="slider__slide-btn"><i style={{ fontSize: "x-large" }} className="bi bi-chevron-left"></i></button>
    {
      props.other_packages.map((pkg, indx) => <div className={`slider__dot ${props.showIndex === indx ? "active" : ""}`} key={indx}></div>)
    }
    <button onClick={nextSlide} className="slider__slide-btn"><i style={{ fontSize: "x-large" }} className="bi bi-chevron-right"></i></button>
  </div>
}

const Card = (props) => {
  return (
    <div className="card">
      <div className="left-pane">
        <img src={props.image} alt="" className="card__image" />
        <div className="card__enrolled">{props.enrolled} enrolled</div>
        <div className="card__rating"><StarRating rating={props.rating} />{`(${props.reviews})`}</div>
      </div>
      <div className="right-pane">
        <h3 className="card__title">{props.title}</h3>
        <div>
          {
            props.topics.map((topic, index) => {
              return <div className="card__topics" key={topic}>
                <Check />{topic}
              </div>
            })
          }
        </div>
        <Button backgroundColor="rgba(19, 174, 126, 1)">View Package</Button>
      </div>
      <Slider showIndex={props.showIndex} setShowIndex={props.setShowIndex} other_packages={props.other_packages} />
    </div>
  )
}



const OtherPackages = () => {
  const [showIndex, setShowIndex] = useState(0);

  console.log({...other_packages[showIndex]});

  return (
    <div className="other-packages-wrapper">
      <h1 className="other-packages__header">Checkout Other Packages</h1>
      <div className="other-packages">
        {
          <Card {...other_packages[showIndex]} showIndex={showIndex} setShowIndex={setShowIndex} other_packages={other_packages} />
        }
      </div></div>
  )
}

export default OtherPackages