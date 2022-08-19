import React from 'react'

const TopBanner = () => {
  return (
    <header className="top-banner">
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
        }}>
            <h2 className="only-content">Welcome to</h2>
            <h1 className="only-content" style={{ margin: "15px 0" }}>AgriAbhyaas</h1>
            <p className="top-banner__paragraph">
            <span>As they say, practice makes you perfect.</span>
            <span>AgriAbhyaas is your one stop platform to practice
            and excel in challenging subjects.</span>
            </p>
        </div>
        <img src="assets/top_banner_image.svg" alt="" className="top-banner__image" />
    </header>
  )
}

export default TopBanner