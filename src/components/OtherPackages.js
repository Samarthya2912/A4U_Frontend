import Button from "../components/shared/Button"
import React from 'react'
import other_packages from '../data/other_packages'
import Check from './shared/Check'
import StarRating from './shared/StarRating'

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
        </div>
    )
}

const OtherPackages = () => {
  return (
    <div className="other-packages">
        {
          other_packages.map((pkg, index) => {
            return <Card key={index} {...pkg} />
          })
        }
    </div>
  )
}

export default OtherPackages