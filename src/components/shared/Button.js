import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="my-btn" style={{
      backgroundColor: props.backgroundColor
    }}>
        {props.children || "Hello"}
    </button>
  )
}

export default Button