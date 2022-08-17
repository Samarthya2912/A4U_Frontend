import React from 'react'

const TopBanner = () => {
  return (
    <header style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgba(11, 110, 79, 1)",
        color: "white",
        padding: "30px 0"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
        }}>
            <h2 style={{ padding: 0, margin: 0 }}>Welcome to</h2>
            <h1 style={{ padding: 0, margin: "15px 0" }}>AgriAbhyaas</h1>
            <p  style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span>As they say, practice makes you perfect.</span>
            <span>AgriAbhyaas is your one stop platform to practice
            and excel in challenging subjects.</span>
            </p>
        </div>
        <img src="assets/top_banner_image.svg" alt="" style={{
            width: "35%"
        }} />
    </header>
  )
}

export default TopBanner