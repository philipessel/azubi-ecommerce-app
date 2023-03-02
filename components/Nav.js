import React from 'react'
import Button from './Button'

export default function Nav() {
    return (
        <div className="nav">
            <div className="companyName">
                <div className="azubi-frontend">Azubi </div>
                <div className="azubi-frontend" id="Front-end-blue">FrontEnd</div>
            </div>

            <div id="all-links">
                <a href="#" className="nav-links" id="home-link"> Home </a>
                <a href="#" className="nav-links"> About </a>
                <a href="#" className="nav-links"> Contact </a>
                <a href="#" className="nav-links"> Cart </a>
            </div>

            <div>
                <Button name="Login" />
            </div>



        </div>
    )
}
