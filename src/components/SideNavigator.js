import React, { useState } from 'react'
import topics from '../data/topics_list'

const SideNavigator = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="side-nav">
            <h1>All Subjects</h1>
            <h3>MATHEMATICS</h3>
            <hr />
            <div className="side-nav__topics">
                {
                    topics.map((topic, index) => {
                        return <span onClick={() => setSelected(index)} className={`side-nav__topics__topic ${index === selected? "selected":""}`} key={index}>{topic.title}</span>
                    })
                }
            </div>
        </div>
    )
}

export default SideNavigator