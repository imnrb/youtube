import React from 'react'
import "./intro.css"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello ,I'm</h2>
                    <h1 className="i-name"> Nitish</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Student</div>
                            <div className="i-title-item">Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        My name is Nitish and I am pursuing Electronics and Telecommunication Engineering at Xavier Institute Of Engineering, Mumbai. I'm a passionate developer but more importantly I'm passionate about learning.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src="nitishpic.jfif" alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro