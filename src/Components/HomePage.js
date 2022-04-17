import React from 'react'

const HomePage = () => {
  return (
    <div id="home-page" className="page">
        <div id="middle-box">
            <div id="brain-image">
                <img src="#" alt="meditating-brain" />
            </div>
            <div className="breathe-logo" id="main-page-logo">
                <h1>Breathe</h1>
            </div>
            <div id="home-buttons">
                <button id="home-questionnaire">Fill a Questionnaire</button>
                <button id="proceed-to-website">Proceed to Website</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage